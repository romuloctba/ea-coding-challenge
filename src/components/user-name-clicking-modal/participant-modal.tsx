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
      <button onClick={() => close()} className={styles.closeButton}>Close</button>
      <h1><ParticipantName id={participantId!} />&apos;s played games:</h1>
    </div>
    <div id="modal-body">
      <PlayedGames id={participantId!} onlyAdversaries={true} />
    </div>
  </div>
}