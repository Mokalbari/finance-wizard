"use client"

import Modal from "@/src/ui/shared/modal/modal"
import { useRef } from "react"
import EditBalanceForm from "@/src/ui/shared/modal/edit-balance-form"

export default function Page() {
  const modalRef = useRef<HTMLDialogElement>(null)

  const openModal = () => {
    modalRef.current?.showModal()
  }

  const closeModal = () => {
    modalRef.current?.close()
  }

  return (
    <div>
      <button onClick={openModal}>When I open the kimono</button>
      <Modal
        onClick={closeModal}
        modalTitle="Delete Savings?"
        modalDesc="Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever."
        ref={modalRef}
      >
        <EditBalanceForm isAdding />
      </Modal>
    </div>
  )
}
