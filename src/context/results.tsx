import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { getConsolidated } from '~utils/game-response/consolidate';
import { GamesApiResponse } from '~utils/game-response/games-response';
import { ParticipantsApiResponse } from '~utils/participants-response/participants-response';
import { getFetcher } from '~utils/swr-utils';
import { GameResults, ResultsContext } from './results.types';

const Results = createContext<ResultsContext>({ loading: true });

export const ResultsProvider = ({ children }: PropsWithChildren) => {
  const { data: gamesApiResponse } = useSWR('/api/games', getFetcher<GamesApiResponse>())
  const { data: participantsApiResponse } = useSWR('/api/participants', getFetcher<ParticipantsApiResponse>())

  const [selectedPlayer, setSelectedPlayer] = useState(0);
  const [games, setGames] = useState<GameResults | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(function checkApiResponse() {
    if (!gamesApiResponse) {
      return;
    }

    const consolidated = getConsolidated(gamesApiResponse);
    setGames(consolidated);
  }, [gamesApiResponse]);

  useEffect(function checkGames () {
    if (!games) return;

    setLoading(false);
  }, [games]);

  const countWin = (id: number) => games?.gamesByWinnerId[id]?.length || 0;
  const countLoss = (id: number) => games?.gamesByLooserId[id]?.length || 0;
  const countPlayed = (id: number) => countWin(id) + countLoss(id);
  const getParticipant = (id: number) => participantsApiResponse?.data.filter(item => item.id === id)?.[0];

  return (
    <Results.Provider
      value={{
        loading,
        countLoss,
        countPlayed,
        countWin,
        games,
        getParticipant,
        participants: participantsApiResponse,
        selectedPlayer,
        setSelectedPlayer,
      }}>
        {children}
    </Results.Provider>)
}

export function useResults() {
  const context = useContext(Results);

  if (!context) {
    throw new Error("Missing provider for Results Context");
  }

  return context;
}