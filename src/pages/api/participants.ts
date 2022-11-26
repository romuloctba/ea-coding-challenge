// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Participant, ParticipantsApiResponse } from '~utils/participants-response/participants-response';
import participants from '~data/participants.json'

type Data = {
  data: Participant[];
}

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(new ParticipantsApiResponse(participants))
}
