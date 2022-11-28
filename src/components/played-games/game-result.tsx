import { useModal } from 'context/modal';
import { GameWithWinner } from '~utils/game-response/games-response';
import PlayerSelector from './player-selector';
import { useResults } from 'context/results';
import ParticipantName from 'components/participant-name/participant-name';

import style from './played-games.module.css';

function GameResult({ game, onlyAdversaries }: { game: GameWithWinner, onlyAdversaries?: boolean }) {
  const { show, participantId } = useModal();

  const handleClick = (id: number) => {
    show(id)
  }

  return (<>
    {
      onlyAdversaries && participantId &&
      ListAdversaries(game, participantId)
      ||
      FullResults(game, handleClick)
    }
  </>);
}

export default GameResult;

function ListAdversaries(game: GameWithWinner, id: number) {
  return <tr>
      {
        game.looserId !== id && <>
          <td>
            <ParticipantName id={game.looserId} />
          </td>
          <td>
            {game.looserScore} / {game.winnerScore}
          </td>
        </>
      }
      {
        game.winnerId !== id && <>
          <td>
            <ParticipantName id={game.winnerId} />
          </td>
          <td>
            {game.winnerScore} / {game.looserScore}
          </td>
        </>
      }
  </tr>;
}

function FullResults(game: GameWithWinner, handleClick: (id: number) => void) {
  const { selectedPlayer: selected } = useResults();

  const getClass = (role: 'winner' | 'looser', id: number) => {
    if (id !== selected) {
      return '';
    }

    if (role === 'winner') {
      return style.winner;
    }
    if (role === 'looser') {
      return style.looser;
    }

  }

  return <>
    <tr>
      <td className={getClass('winner', game.winnerId)}>
        <PlayerSelector id={game.winnerId} onClick={() => handleClick(game.winnerId)} />
      </td>
      <td className={getClass('looser', game.looserId)}>
        <PlayerSelector id={game.looserId} onClick={() => handleClick(game.looserId)} />
      </td>
    </tr>
    <tr>
      <td>{game.winnerScore}</td>
      <td>{game.looserScore}</td>
    </tr>
    </>;
}
