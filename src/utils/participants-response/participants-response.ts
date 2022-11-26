import { ParticipantsJson, RawParticipant } from './participant-response.types';

export class Participant {
  id: number;
  firstName: string;
  lastName: string;
  banned?: boolean;

  constructor(raw: RawParticipant) {
    this.id = raw.id;
    this.firstName = raw['First Name'];
    this.lastName = raw['Last Name'];
    this.banned = raw['Banned'];
  }
}

const participantsMapper = (data: ParticipantsJson) =>
  Object.entries(data)
  .map(([_, item]) => new Participant(item))
  .filter((item) => item.firstName)

export class ParticipantsApiResponse {
  data: Participant[];

  constructor(raw: ParticipantsJson) {
    this.data = participantsMapper(raw);
  }
}