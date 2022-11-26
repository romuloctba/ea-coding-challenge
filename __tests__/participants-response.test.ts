import { ParticipantsJson } from './../src/utils/participants-response/participant-response.types';
import { ParticipantsApiResponse } from '../src/utils/participants-response/participants-response';

const RAW: ParticipantsJson = {
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

const EXPECTED: ParticipantsApiResponse = {
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
    const result = new ParticipantsApiResponse(RAW);
    expect(result).toEqual(EXPECTED);
  })
})