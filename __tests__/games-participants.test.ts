import { GamesApiResponse } from '../src/utils/game-response/games-response';
import { GameWithWinner } from '../src/utils/game-response/games-response';
import { getConsolidated } from '../src/utils/game-response/consolidate';

const RAW = {
  "1": [
    {
      "winner_score": 1,
      "looser_id": 2,
      "looser_score": 0
    },
    {
      "winner_score": 9,
      "looser_id": 2,
      "looser_score": 5
    }
  ],
  "2": [
    {
      "winner_score": 11,
      "looser_id": 1,
      "looser_score": 5
    }
  ],
}



const EXPECTED = {
  "gamesByLooserId": {
    "1": [
      new GameWithWinner({
          "winner_score": 11,
          "looser_id": 1,
          "looser_score": 5
      }, 2)
    ],
    "2": [
      new GameWithWinner({
        "winner_score": 1,
        "looser_id": 2,
        "looser_score": 0
      }, 1),
      new GameWithWinner({
        "winner_score": 9,
        "looser_id": 2,
        "looser_score": 5
      }, 1)
    ]
  },
  "gamesByWinnerId": {
    "1": [
      new GameWithWinner({
        "winner_score": 1,
        "looser_id": 2,
        "looser_score": 0
      }, 1),
      new GameWithWinner({
        "winner_score": 9,
        "looser_id": 2,
        "looser_score": 5
      }, 1)
    ],
    "2": [
      new GameWithWinner({
        "winner_score": 11,
        "looser_id": 1,
        "looser_score": 5
      }, 2)
    ]
  }
}

describe('getConsolidated ', () => {
  it('should return consolidated gamesByLooserId and gamesByWinnerId ', () => {
    const gamesResponse = new GamesApiResponse(RAW);

    const result = getConsolidated(gamesResponse);

    expect(result).toEqual(EXPECTED);
  })
})

export {}