import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { GameWithWinner } from '~utils/game-response/games-response';

const Modal = createContext<{
  close: Function,
  game?: GameWithWinner,
  isOpen: boolean,
  participantId?: number,
  showGame?: Function,
  show: Function} | null>(null);

export const ModalProvider = ({ children }: PropsWithChildren) => {

  const [isOpen, setIsOpen] = useState(false);
  const [game, setGame] = useState<GameWithWinner>();
  const [participantId, setParticipantId] = useState<number>();

  function close() {
    setIsOpen(false);
    setGame(undefined);
  }

  function show(id: number) {
    setParticipantId(id);
    setIsOpen(true);
  }

  function showGame(game: GameWithWinner) {
    setGame(game);
  }

  useEffect(() => {
  }, [isOpen])

  return (
    <Modal.Provider
      value={{
        close,
        isOpen,
        participantId,
        show,
        game,
        showGame
      }}>
        {children}
    </Modal.Provider>)
}

export function useModal() {
  const context = useContext(Modal);

  if (!context) {
    throw new Error("Missing provider for Modal Context");
  }

  return context;
}