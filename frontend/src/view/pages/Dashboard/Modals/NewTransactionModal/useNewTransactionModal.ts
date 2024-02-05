import { useDashboard } from "../../components/DashboardContext/useDashboard";

export function useNewTransactionModal() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  } = useDashboard();

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  }
}