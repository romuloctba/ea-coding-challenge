import ParticipantName from 'components/participant-name/participant-name';
import { useModal } from 'context/modal';
import { useResults } from 'context/results';

import style from './result-figure.module.css';

function ResultFigure() {
  const { game } = useModal();
  const { selectedPlayer } = useResults();

  if (!game || !selectedPlayer) {
    return <></>
  }

  return <>
      <div className={style.emoji}>
        {selectedPlayer === game?.winnerId ? ` 😊` : `😞`}
      </div>
      <ul>
        <li>
          <ParticipantName id={game?.winnerId} /> scored {game.winnerScore}
        </li>
        <li>
          <ParticipantName id={game?.looserId} /> scored {game.looserScore}
        </li>
      </ul>
      <div>
        <ParticipantName id={selectedPlayer} /> {selectedPlayer === game?.winnerId ? ' won!' : 'lost.'}
      </div>
  </>
}

export default ResultFigure;