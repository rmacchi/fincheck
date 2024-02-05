import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../../components/Modal";
import { Button } from "../../../../../components/Button";
import { useFiltersModal } from "./useFiltersModal";
import { cn } from "../../../../../../app/utils/cn";

interface FiltersModalProps {
  open: boolean;
  onClose(): void;
}

const mockedAccounts = [
  {
    id: '100',
    name: 'Nubank',
  },
  {
    id: '200',
    name: 'XP Investimentos',
  },
  {
    id: '300',
    name: 'C6 Bank',
  },
]

export function FiltersModal({ open, onClose }: FiltersModalProps) {
  const {
    selectedBankAccountId,
    handleSelectBankAccount,
    selectedYear,
    handleChangeYear,
  } = useFiltersModal();

  return (
    <Modal open={open} onClose={onClose} title="Filtros">
      <div>
        <span className="text-lg tracking-[-1px] font-bold text-gray-800">
          Conta
        </span>

        <div className="space-y-2 mt-2">
          {mockedAccounts.map(account => (
            <button
              key={account.id}
              onClick={() => handleSelectBankAccount(account.id)}
              className={cn(
                "p-2 rounded-2xl w-full text-left text-gray-800 hover:bg-gray-50 transition-colors",
                account.id === selectedBankAccountId && "!bg-gray-200",
              )}
            >
              {account.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 text-gray-800">
        <span className="text-lg tracking-[-1px] font-bold text-gray-800">
          Ano
        </span>

        <div className="mt-2 w-52 flex justify-between items-center">
          <button
            className="w-12 h-12 flex items-center justify-center"
            onClick={() => handleChangeYear(-1)}
          >
            <ChevronLeftIcon className="w-6 h-6 " />
          </button>

          <div className="flex-1 text-center text-sm font-medium tracking-[-0.5px]">
            <span>{selectedYear}</span>
          </div>

          <button
            className="w-12 h-12 flex items-center justify-center"
            onClick={() => handleChangeYear(1)}
          >
            <ChevronRightIcon className="w-6 h-6 " />
          </button>
        </div>
      </div>

      <Button className="w-full items-center justify-center mt-10">
        Aplicar Filtros
      </Button>
    </Modal>
  )
}