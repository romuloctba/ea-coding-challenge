import { GameWithWinner } from './games-response';

export type RawGame = {
  winner_score: number;
  looser_id: number;
  looser_score: number | string;
};

export type GamesJson = { [key: string]: RawGame[] };

export type GamesResultData = { [k: string]: GameWithWinner[]};

export type Consolidated = { [id: string]: GameWithWinner[] };
