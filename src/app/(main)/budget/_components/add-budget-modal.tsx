"use client"

import { useModal } from "@/hooks/useModal"
import AddButton from "@/ui/shared/atoms/add-button"
import Modal from "@/ui/shared/modal/modal"
import { useRef } from "react"
import BudgetForm from "./budget-form"

export default function AddBudgetModal() {
  const modalRef = useRef<HTMLDialogElement>(null)
  const { openModal, closeModal } = useModal(modalRef)

  return (
    <>
      <header className="">
        <AddButton
          isBlack
          showBefore
          text="Add New Budget"
          onClick={openModal}
        />
      </header>
      <Modal
        ref={modalRef}
        close={closeModal}
        modalTitle="Add New Budget"
        modalDesc="Choose a category to set a spending budget. These categories can help you monitor spending."
      >
        <BudgetForm id="" method="POST" close={closeModal} />
      </Modal>
    </>
  )
}
