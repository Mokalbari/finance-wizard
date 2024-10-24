"use client"

import Modal from "@/components/modal/modal"
import AddButton from "@/components/ui/add-button"
import PageTitle from "@/components/ui/page-title"
import { useModal } from "@/hooks/useModal"
import { useRef } from "react"
import PotForm from "./pot-form"

export default function AddPotModal() {
  const modalRef = useRef<HTMLDialogElement>(null)
  const { openModal, closeModal } = useModal(modalRef)

  return (
    <>
      <header className="flex items-center justify-between">
        <PageTitle text="Pots" className="" />
        <AddButton isBlack showBefore text="Add New Pot" onClick={openModal} />
      </header>
      <Modal
        ref={modalRef}
        close={closeModal}
        modalTitle="Add New Pot"
        modalDesc="Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
      >
        <PotForm method="POST" close={closeModal} id="" />
      </Modal>
    </>
  )
}
