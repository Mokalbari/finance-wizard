"use client"

import { useRef } from "react"
import Modal from "@/src/ui/shared/modal/modal"
import AddButton from "@/src/ui/shared/atoms/add-button"
import BudgetForm from "./budget-form"
import { useModal } from "@/src/hooks/useModal"

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
        modalTitle="coucou"
        modalDesc="coucou ma modale bancale"
      >
        <BudgetForm />
      </Modal>
    </>
  )
}