import { GamesApiResponse, GameWithWinner } from './games-response';
import { Consolidated } from './games-response.types';

export function getConsolidated({ data: apiData }: GamesApiResponse) {
  const wins: Consolidated = {};
  const loss: Consolidated = {};

  const gamesByWinnerId = Object
    .keys(apiData)
    .reduce((results, id): Consolidated => {
      const wonGames = apiData[id];

      results[id] = wonGames;

      addLost(wonGames, loss);

      return results;
    }, wins);

  return { gamesByLooserId: loss, gamesByWinnerId };
}

function addLost(wonGames: GameWithWinner[], loss: Consolidated) {
  for (let i = 0; i < wonGames.length; i++) {
    const game = wonGames[i];
    const { looserId } = game;

    if (!loss[looserId]) {
      loss[looserId] = [];
    }

    loss[looserId].push(game);
  }
}
