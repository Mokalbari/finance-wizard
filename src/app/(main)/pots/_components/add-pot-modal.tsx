"use client"

import PageTitle from "@/src/ui/shared/atoms/page-title"
import AddButton from "@/src/ui/shared/atoms/add-button"
import Modal from "@/src/ui/shared/modal/modal"
import PotForm from "./pot-form"
import { useRef } from "react"
import { useModal } from "@/src/hooks/useModal"

// type Props = {}

export default function AddPotModal() {
  const modalRef = useRef<HTMLDialogElement>(null)
  const { openModal, closeModal } = useModal(modalRef)

  return (
    <>
      <header className="flex items-center justify-between">
        <PageTitle htmlTag="h1" text="Pots" className="" />
        <AddButton isBlack showBefore text="Add New Pot" onClick={openModal} />
      </header>
      <Modal
        ref={modalRef}
        close={closeModal}
        modalTitle="Add New Pot"
        modalDesc="Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
      >
        <PotForm />
      </Modal>
    </>
  )
}
