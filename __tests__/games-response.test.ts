import { GamesResponse } from '../src/utils/games-response';

const RAW = {
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

const EXPECTED: GamesResponse = {
  data: {
    "1": [{
      "winnerScore": 21,
      "looserId": 3,
      "looserScore": 6
    }],
    "2": [{
      "winnerScore": 5,
      "looserId": 3,
      "looserScore": 0
    }],
  }
};

describe('GamesResponse ', () => {
  it('should parse rawData into games ', () => {
    const result = new GamesResponse(RAW);
    expect(result).toEqual(EXPECTED);
  })
})