import ParticipantName from 'components/participant-name/participant-name';
import PlayedGames from 'components/played-games/played-games';
import { useModal } from 'context/modal';
import styles from './participant-modal.module.css';

export default function ParticipantModal ({ close }: { close: Function }) {
  const { participantId, isOpen } = useModal();

  const getClass = () => {
    return isOpen ? styles.openedModal : styles.closedModal;
  }

  return <div className={getClass()}>
    <div id="modal-header">
      <h1>Games of <ParticipantName id={participantId!} /></h1>
      <button onClick={() => close()}>x</button>
    </div>
    <div id="modal-body">
      <PlayedGames id={participantId!} />
    </div>
  </div>
}