import ParticipantName from 'components/participant-name/participant-name';
import PlayedWon from 'components/played-won/played-won';
import { ParticipantEntryProps } from './participant-entry.types';

import style from './participant-table.module.css';

function ParticipantEntry({selected, onSelected, id}: ParticipantEntryProps) {

  const getClass = () => {
    if (selected === id) {
      return style.selected
    } else {
      return style.notSelected
    }
  }

  return (
    <tr className={getClass()}>
      <td className={style.participantName}><ParticipantName id={id}/></td>
      <td className={style.center}><PlayedWon id={id} /></td>
      <td>
        <button onClick={() => onSelected()}>select</button>
      </td>
    </tr>
  );
}

export default ParticipantEntry;