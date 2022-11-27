import { useResults } from 'context/results';
import { useEffect, useState } from 'react';

function PlayedWon({ id }: { id: number }) {
  const { countPlayed, countWin, loading } = useResults()

  const [played, setPlayed] = useState(0);
  const [win, setWin] = useState(0);

  useEffect(() => {
    if (loading) {
      return
    };

    setWin(countWin!(id))
    setPlayed(countPlayed!(id))
  }, [countPlayed, countWin, id, loading])


  return (<span>{played} / {win}</span>);
}

export default PlayedWon;