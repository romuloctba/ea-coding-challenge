import { GamesApiResponse } from '../../utils/game-response/games-response';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import games from '../../data/games.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GamesApiResponse>
) {

  res.status(200).json(new GamesApiResponse(games))
}
