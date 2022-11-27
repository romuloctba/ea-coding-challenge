import { useModal } from 'context/modal';
import { GameWithWinner } from '~utils/game-response/games-response';
import PlayerSelector from './player-selector';

function GameResult({ game, onSelectParticipant }: { game: GameWithWinner, onSelectParticipant?: Function }) {
  const { show } = useModal();

  const onClick = (id: number) => {
    show(id)
  }
  return (<>
    <tr>
      <td>
        <PlayerSelector id={game.winnerId} onClick={() => onClick(game.winnerId)}/>
      </td>
      <td>
        <PlayerSelector id={game.looserId} onClick={() => onClick(game.looserId)}/>
      </td>
    </tr>
    <tr>
      <td>{game.winnerScore}</td>
      <td>{game.looserScore}</td>
    </tr>
  </>);
}

export default GameResult;