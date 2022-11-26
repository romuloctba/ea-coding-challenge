import { GamesJson } from '../src/utils/game-response/games-response.types';
import { GamesApiResponse, GameWithWinner } from '../src/utils/game-response/games-response';

const RAW: GamesJson = {
  "1": [{
    "winner_score": 21,
    "looser_id": 3,
    "looser_score": 6
  }],
  "2": [{
    "winner_score": 5,
    "looser_id": 3,
    "looser_score": "n/a"
  }],
};

const EXPECTED: GamesApiResponse = {
  data: {
    "1": [
      new GameWithWinner({
        "winner_score": 21,
        "looser_id": 3,
        "looser_score": 6
      }, 1)
    ],
    "2": [
      new GameWithWinner({
        "winner_score": 5,
        "looser_id": 3,
        "looser_score": 0
      }, 2)
    ],
  }
};

describe('GamesResponse ', () => {
  it('should parse rawData into games ', () => {
    const result = new GamesApiResponse(RAW);
    expect(result).toEqual(EXPECTED);
  })
})