export type ParticipantsJson = { [key: string]: RawParticipant };

export type RawParticipant = {
  id: number,
  "First Name": string,
  "Last Name": string,
  "Banned"?: boolean
};