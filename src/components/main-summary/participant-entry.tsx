import ParticipantName from 'components/participant-name/participant-name';
import PlayedWon from 'components/played-won/played-won';
import { ParticipantEntryProps } from './participant-entry.types';

function ParticipantEntry({selected, onSelected, id}: ParticipantEntryProps) {
  return (<tr>
    <td><ParticipantName id={id}/></td>
    <td><PlayedWon id={id} /></td>
    <td>
      <button onClick={() => onSelected()}>select</button>
    </td>
  </tr>);
}

export default ParticipantEntry;