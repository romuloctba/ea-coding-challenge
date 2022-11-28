import ParticipantTable from '../participant-table/participant-table';
import styles from './main-summary.module.css';

export default function MainSummary () {


  return(
    <div className={styles.summaryWrapper}>
      <ParticipantTable />
    </div>
  )
  }