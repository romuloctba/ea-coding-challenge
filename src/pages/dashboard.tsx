import DashboardContainer from 'containers/dashboard/dashboard.container'
import { ModalProvider } from 'context/modal'
import { ResultsProvider } from 'context/results'
import Head from 'next/head'

export default function Dashboard() {
  return <>
    <Head>
      <title>Games Results</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ResultsProvider>
      <ModalProvider>
        <DashboardContainer />
      </ModalProvider>
    </ResultsProvider>
  </>
}