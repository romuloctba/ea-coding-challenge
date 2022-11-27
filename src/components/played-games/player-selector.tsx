import ParticipantName from 'components/participant-name/participant-name';

function PlayerSelector({ id, onClick }: { id: number, onClick: Function }) {

  return (<>
    <button onClick={() => onClick()}>
      <ParticipantName id={id} />
    </button>
  </>);
}

export default PlayerSelector;