import MainSummary from 'components/main-summary/main-summary';
import ParticipantModal from 'components/user-name-clicking-modal/participant-modal';
import { useModal } from 'context/modal';

export default function DashboardContainer() {
  const { close: closeModal } = useModal();

  return <>
    <MainSummary />
    <ParticipantModal close={() => closeModal()} />
  </>
}