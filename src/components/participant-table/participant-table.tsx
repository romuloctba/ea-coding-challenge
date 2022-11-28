import PlayedGames from 'components/played-games/played-games';
import { useResults } from 'context/results'
import { useState } from 'react';
import ParticipantEntry from './participant-entry';

import style from './participant-table.module.css';

export default function ParticipantTable() {
  const { loading, participants, selectedPlayer, setSelectedPlayer } = useResults();

  const getStats = (id: number) => {
    setSelectedPlayer!(id);
  }

  if (loading) return <><p>Loading...</p></>

  return <>
    <table className={style.participantTable}>
      <tbody>
        <tr>
          <th scope="row" className={style.nameHeader}>Name</th>
          <th scope="row" className={style.center}>Played / Won</th>
          <th scope="row"> </th>
        </tr>
        {participants && participants
          .data.map(participant => <ParticipantEntry
            key={participant.id}
            id={participant.id}
            onSelected={() => getStats(participant.id)}
            selected={selectedPlayer!} />
          )}
      </tbody>

    </table>

    <div className={style.gameResult}>
      <PlayedGames id={selectedPlayer!} />
    </div>
  </>
}
