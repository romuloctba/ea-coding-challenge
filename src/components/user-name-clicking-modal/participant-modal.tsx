import ParticipantName from 'components/participant-name/participant-name';
import { useResults } from 'context/results';

type ParticipantModalProps = {
  id: number;
}

export default function ParticipantModal ({id}: ParticipantModalProps) {
  const { games } = useResults();

  return <>
    <div id="modal-header">
      <h1>Games of <ParticipantName id={id} /></h1>
    </div>
    <div id="modal-body">
      {/* <PlayedGames id={id} /> */}
    </div>
  </>
}