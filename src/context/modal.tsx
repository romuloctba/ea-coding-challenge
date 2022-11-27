import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

const Modal = createContext<{ close: Function, isOpen: boolean, participantId?: number, show: Function} | null>(null);

export const ModalProvider = ({ children }: PropsWithChildren) => {

  const [isOpen, setIsOpen] = useState(false);
  const [participantId, setParticipantId] = useState<number>();

  function close() {
    setIsOpen(false);
  }

  function show(id: number) {
    setParticipantId(id);
    setIsOpen(true);
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