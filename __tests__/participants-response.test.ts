import { ParticipantsResponse } from '../src/utils/participants-response';

const testInput = {
  "1": {
    "id": 1,
    "First Name": "Melody",
    "Last Name": "Rivera"
  },
  "2": {
    "id": 2,
    "First Name": "Conrad",
    "Last Name": "Taylor",
    "Banned": true
  }
};

const expectedOutput: ParticipantsResponse = {
  "data": [{
    "id": 1,
    "firstName": "Melody",
    "lastName": "Rivera"
  }, {
    "id": 2,
    "firstName": "Conrad",
    "lastName": "Taylor",
    "banned": true
  }]
};

describe('GamesResponse ', () => {
  it('should parse rawData into games ', () => {
    const result = new ParticipantsResponse(testInput);
    expect(result).toEqual(expectedOutput);
  })
})