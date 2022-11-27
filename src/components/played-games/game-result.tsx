import ParticipantName from 'components/participant-name/participant-name';
import { GameWithWinner } from '~utils/game-response/games-response';

function GameResult({ game }: { game: GameWithWinner }) {
  return (<>
    <tr>
      <td><ParticipantName id={game.winnerId} /></td>
      <td><ParticipantName id={game.looserId} /></td>
    </tr>
    <tr>
      <td>{game.winnerScore}</td>
      <td>{game.looserScore}</td>
    </tr>
  </>);
}

export default GameResult;