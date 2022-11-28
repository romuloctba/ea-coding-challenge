import { useModal } from 'context/modal';
import { GameWithWinner } from '~utils/game-response/games-response';

import style from './game-selector.module.css';

function GameSelector({ game }: { game: GameWithWinner }) {

  const { showGame } = useModal()

  if (!showGame) return <></>

  return (
    <button
      onClick={() => showGame(game)}>
        Select
    </button>
  );

}

export default GameSelector;