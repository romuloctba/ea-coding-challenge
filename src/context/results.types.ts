import { Consolidated } from '~utils/game-response/games-response.types';
import { ParticipantsApiResponse } from '~utils/participants-response/participants-response';

export type GameResults = { gamesByLooserId: Consolidated, gamesByWinnerId: Consolidated };

export type ResultsContext = { games: null | GameResults, participants?: ParticipantsApiResponse };
