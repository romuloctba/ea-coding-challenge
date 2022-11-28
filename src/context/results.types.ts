import { Participant } from '~utils/participants-response/participants-response';
import { Consolidated } from '~utils/game-response/games-response.types';
import { ParticipantsApiResponse } from '~utils/participants-response/participants-response';

export type GameResults = { gamesByLooserId: Consolidated, gamesByWinnerId: Consolidated };

export type ResultsContext = {
  loading: boolean,
  games?: null | GameResults,
  participants?: ParticipantsApiResponse,
  countWin?: (participantId: number) => number,
  countLoss?: (participantId: number) => number,
  countPlayed?: (participantId: number) => number,
  getParticipant?: (participantId: number) => Participant | undefined,
  selectedPlayer?: number,
  setSelectedPlayer?: (id: number) => void,
};
