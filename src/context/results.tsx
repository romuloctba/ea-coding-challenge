import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { getConsolidated } from '~utils/game-response/consolidate';
import { GamesApiResponse } from '~utils/game-response/games-response';
import { GamesJson } from '~utils/game-response/games-response.types';
import { ParticipantsApiResponse } from '~utils/participants-response/participants-response';
import { getFetcher } from '~utils/swr-utils';
import { GameResults, ResultsContext } from './results.types';

const Results = createContext<ResultsContext | null>(null);

export const ResultsProvider = ({ children }: PropsWithChildren) => {
  const { data: gamesApiResponse } = useSWR('/api/games', getFetcher<GamesApiResponse>())
  const { data: participantsApiResponse } = useSWR('/api/participants', getFetcher<ParticipantsApiResponse>())

  const [games, setGames] = useState<GameResults | null>(null);

  useEffect(() => {
    if (!gamesApiResponse) {
      return;
    }

    const consolidated = getConsolidated(gamesApiResponse);

    setGames(consolidated);
  }, [gamesApiResponse]);

  return (<Results.Provider value={{ games, participants: participantsApiResponse }}>
      {children}
    </Results.Provider>)
}

export function useResults() {
  return useContext(Results);
}