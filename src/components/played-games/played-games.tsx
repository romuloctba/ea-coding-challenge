import { useResults } from 'context/results'
import { useEffect, useState } from 'react';
import { GameWithWinner } from '~utils/game-response/games-response';
import GameResult from './game-result';

type PlayedGamesStats = { win: GameWithWinner[], loss: GameWithWinner[] }

type PlayedGamesProps = {
  id: number;
}
export default function PlayedGames ({ id }: PlayedGamesProps) {
  const { games } = useResults();

  const [myGames, setMyGames] = useState<PlayedGamesStats>({ win: [], loss: []})
  useEffect(() => {
    if (!id || !games) return;

    const results: PlayedGamesStats = {
      loss: games.gamesByLooserId[id],
      win: games.gamesByWinnerId[id],
    }

    setMyGames(results);
  }, [id, games]);

  if (!myGames) {
    return <h1>no games yet</h1>;
  }

  return <>
    <table>
      <tbody>
        <tr>
          <th scope="row">Winner</th>
          <th scope="row">Looser</th>
        </tr>
        {
          myGames.win?.map((game, index) => {
            return <GameResult key={index} game={game} />
          })
        }
        {
          myGames.loss?.map((game, index) => {
            return <GameResult key={index} game={game} />
          })
        }

        </tbody>
      </table>
  </>;
}