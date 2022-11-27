import { useResults } from 'context/results';
import { useEffect, useState } from 'react';

function ParticipantName({ id }: { id: number }) {
  const { getParticipant, loading } = useResults()
  const [banned, setBanned] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (!id || loading) return;

    const participant = getParticipant!(id);
    if (!participant) {
      throw new Error(`participant ${id} not found`);
    }

    setFirstName(participant.firstName);
    setLastName(participant.lastName);
    setBanned(!!participant.banned);
  }, [id, loading, getParticipant])

  return (<span>{banned && <b title='banned'>b</b>} {firstName} {lastName}</span>);
}

export default ParticipantName;