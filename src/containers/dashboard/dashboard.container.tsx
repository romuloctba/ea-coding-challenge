import MainSummary from 'components/main-summary/main-summary';
import { useResults } from 'context/results'

export default function DashboardContainer() {
  const { games, participants } = useResults() || {};

  return <>
    <MainSummary />
  </>;
}