import DashboardContainer from 'containers/dashboard/dashboard.container'
import { ModalProvider } from 'context/modal'
import { ResultsProvider } from 'context/results'

export default function Dashboard() {
  return <>
    <ResultsProvider>
      <ModalProvider>
        <DashboardContainer />
      </ModalProvider>
    </ResultsProvider>
  </>
}