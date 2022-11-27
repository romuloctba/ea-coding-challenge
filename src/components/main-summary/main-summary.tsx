import PlayedGames from 'components/played-games/played-games';
import { useResults } from 'context/results'
import { useState } from 'react';
import ParticipantEntry from './participant-entry';

export default function MainSummary () {
  const { loading, participants } = useResults();
  const [selected, setSelected] = useState(0);

  const getStats = (id: number) => {
    setSelected(id);
  }

  if (loading) return <><p>Loading...</p></>

  return <>
    <table>
        <tbody>
        <tr>
          <th scope="row">Name</th>
          <th scope="row">Played / Won</th>
          <th scope="row"></th>
        </tr>
        {
          participants && participants.data.map(participant =>
            <ParticipantEntry
              key={participant.id}
              id={participant.id}
              onSelected={() => getStats(participant.id)}
              selected={selected} />
          )
        }
        </tbody>

      </table>

      <PlayedGames id={selected} />

  </>;
}