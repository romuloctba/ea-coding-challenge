import ParticipantName from 'components/participant-name/participant-name';
import PlayedGames from 'components/played-games/played-games';
import { useModal } from 'context/modal';

import style from './participant-modal.module.css';
import ResultFigure from './result-figure/result-figure';

export default function ParticipantModal ({ close }: { close: Function }) {
  const { participantId, isOpen } = useModal();

  const getClass = () => {
    return isOpen ? style.openedModal : style.closedModal;
  }

  return <div className={getClass()}>
    <div id="modal-header">
      <button onClick={() => close()} className={style.closeButton}>Close</button>
      <h1><ParticipantName id={participantId!} />&apos;s played games:</h1>
    </div>
    <div className={style.modalBody}>
      <PlayedGames id={participantId!} onlyAdversaries={true} />
      <figure className={style.modalFigure}>
        <ResultFigure />
      </figure>
    </div>
  </div>
}