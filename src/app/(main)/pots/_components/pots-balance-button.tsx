"use client"

import { usePotCardContext } from "@/src/context/pots-context"
import { useModal } from "@/src/hooks/useModal"
import AddButton from "@/src/ui/shared/atoms/add-button"
import Modal from "@/src/ui/shared/modal/modal"
import { useRef } from "react"
import PotsBalanceForm from "./pots-balance-form"

export default function PotsBalanceButton() {
  const { data } = usePotCardContext()
  const addMoneyModal = useRef<HTMLDialogElement>(null)
  const withdrawModal = useRef<HTMLDialogElement>(null)

  const { openModal: openAddMoneyModal, closeModal: closeAddMoneyModal } =
    useModal(addMoneyModal)
  const { openModal: openWithdrawModal, closeModal: closeWithdrawModal } =
    useModal(withdrawModal)

  return (
    <>
      <div className="mt-10 flex justify-evenly lg:gap-4">
        <AddButton
          onClick={openAddMoneyModal}
          className="lg:w-1/2"
          isBlack={false}
          showBefore
          text="Add Money"
        />
        <AddButton
          onClick={openWithdrawModal}
          className="lg:w-1/2"
          isBlack={false}
          showBefore={false}
          text="Withdraw"
        />
      </div>
      <Modal
        ref={addMoneyModal}
        modalTitle={`Add to ${data.name}`}
        modalDesc="Add money to your pot to keep it separate from your main balance. As soon as you add this money, it will be deducted from your current balance."
        close={closeAddMoneyModal}
      >
        <PotsBalanceForm isAdding close={closeAddMoneyModal} />
      </Modal>
      <Modal
        ref={withdrawModal}
        modalTitle={`Add to ${data.name}`}
        modalDesc="Add money to your pot to keep it separate from your main balance. As soon as you add this money, it will be deducted from your current balance."
        close={closeWithdrawModal}
      >
        <PotsBalanceForm isAdding={false} close={closeWithdrawModal} />
      </Modal>
    </>
  )
}
