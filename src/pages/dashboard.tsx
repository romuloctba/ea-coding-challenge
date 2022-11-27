import DashboardContainer from 'containers/dashboard/dashboard.container'
import { ResultsProvider } from 'context/results'

export default function Dashboard() {
  return <>
    <ResultsProvider>
      <DashboardContainer />
    </ResultsProvider>
  </>
}