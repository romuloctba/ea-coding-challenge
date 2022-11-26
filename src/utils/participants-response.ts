export type RawParticipant = { id: number, "First Name": string, "Last Name": string, "Banned"?: boolean };
export type ParticipantsJson = { [key: string]: RawParticipant };

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

export class ParticipantsResponse {
  data: Participant[];

  constructor(raw: ParticipantsJson) {
    this.data = participantsMapper(raw);
  }
}