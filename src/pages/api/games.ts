import { Game, GamesResponse } from './../../utils/games-response';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import games from '../../data/games.json'

type Data = {
  data: { [winnerId: string]: Game[] }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  res.status(200).json(new GamesResponse(games))
}
