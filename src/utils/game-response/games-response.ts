import { GamesJson, GamesResultData, RawGame } from './games-response.types';

export class GamesApiResponse {
  data: { [k: string]: GameWithWinner[]};

  constructor(raw: GamesJson) {
    this.data = GamesMapper(raw);
  }
}

export class GameWithWinner {
  winnerId: number;
  winnerScore: number;
  looserId: number;
  looserScore: number;

  constructor({ winner_score, looser_id, looser_score}: RawGame, winnerId: number) {
    this.winnerScore = winner_score;
    this.looserId = looser_id;
    this.looserScore = parseScore(looser_score);
    this.winnerId = winnerId;
  }
}

const GamesMapper = (data: GamesJson): GamesResultData => {
  const ids = Object.keys(data);
  const mapped: GamesResultData = {};

  for (let id of ids) {
    const games = data[id];

    mapped[id] = games
        .map((game: RawGame) => new GameWithWinner(game, parseInt(id)));
  }

  return mapped;
}

function parseScore(original: string | number) {
  if (original === 'n/a') {
    return 0;
  }

  if (!original) {
    return 0;
  }

  return parseInt(original.toString());
}