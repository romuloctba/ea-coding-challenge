export type RawGame = {
  winner_score: number;
  looser_id: number;
  looser_score: number | string;
};

export type GamesJson = { [key: string]: RawGame[] };

export class WinResults {

}

export class Game {
  winnerScore: number;
  looserId: number;
  looserScore: number;

  constructor({ winner_score, looser_id, looser_score}: RawGame) {
    this.winnerScore = winner_score;
    this.looserId = looser_id;
    this.looserScore = parseInt(looser_score.toString()) || 0;
  }
}

const GamesMapper = (data: GamesJson) => {
  const ids = Object.keys(data);
  const results: { [k: string]: Game[]} = {};
  // console.log(data);
  for (let id of ids) {
      const parsedGamesOfId = data[id]
        .map((game: RawGame) => new Game(game));

      results[id] = parsedGamesOfId;
  }

  return results;
}


export class GamesResponse {
  data: { [winnerId: string]: Game[] };

  constructor(raw: GamesJson) {
    console.log(raw)
    this.data = GamesMapper(raw);
  }
}

