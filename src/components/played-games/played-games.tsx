import { useModal } from 'context/modal';
import { useResults } from 'context/results'
import { useEffect, useState } from 'react';
import { GameWithWinner } from '~utils/game-response/games-response';
import GameResult from './game-result';

import style from './played-games.module.css';

type PlayedGamesStats = { win: GameWithWinner[], loss: GameWithWinner[] }

type PlayedGamesProps = {
  id: number;
  onlyAdversaries?: boolean;
}

export default function PlayedGames ({ id, onlyAdversaries = false }: PlayedGamesProps) {
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

  if (!id || !myGames) {
    return <p>Please select a participant</p>
  }

  return <>
    <table>
      <tbody>

        {
        onlyAdversaries &&
          <tr>
            <th scope="row" className={style.adversaryHeader}>Adversary</th>
            <th scope="row" className={style.scoreHeader}>Score</th>
            <th scope="row"></th>
          </tr>
        }

        {
        !onlyAdversaries &&
          <tr>
            <th scope="row">Winner</th>
            <th scope="row">Looser</th>
          </tr>
        }

        {
          myGames.win?.map((game, index) => {
            return <GameResult key={index} game={game} onlyAdversaries={onlyAdversaries} />
          })
        }
        {
          myGames.loss?.map((game, index) => {
            return <GameResult key={index} game={game} onlyAdversaries={onlyAdversaries} />
          })
        }

        </tbody>
      </table>
  </>
}