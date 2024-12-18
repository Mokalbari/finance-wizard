"use client"

import { usePotCardContext } from "@/context/pots-context"
import { useModal } from "@/hooks/useModal"
import { useRef } from "react"
import DeleteForm from "../../../../components/modal/delete-form"
import Modal from "../../../../components/modal/modal"
import PotForm from "./pot-form"

export default function PotsEllipsisList() {
  const { data } = usePotCardContext()
  const editModalRef = useRef<HTMLDialogElement>(null)
  const deleteModalRef = useRef<HTMLDialogElement>(null)

  const { openModal: openEditModal, closeModal: closeEditModal } =
    useModal(editModalRef)
  const { openModal: openDeleteModal, closeModal: closeDeleteModal } =
    useModal(deleteModalRef)

  return (
    <div className="w-max">
      <ul className="rounded-lg bg-white px-5 text-sm shadow-lg">
        <li className="py-3">
          <button onClick={openEditModal}>Edit {data.name}</button>
        </li>
        <li className="border-t border-t-grey-100 py-3 text-red">
          <button onClick={openDeleteModal}>Delete {data.name}</button>
        </li>
      </ul>
      <Modal
        ref={editModalRef}
        close={closeEditModal}
        modalTitle={`Edit '${data.name}'`}
        modalDesc="If your saving targets change, feel free to update your pots."
      >
        <PotForm id={data.id} method="PUT" close={closeEditModal} />
      </Modal>
      <Modal
        ref={deleteModalRef}
        close={closeDeleteModal}
        modalTitle={`Delete '${data.name}'`}
        modalDesc={`Are you sure you want to delete ${data.name}? This action cannot be reversed, and all the data inside it will be removed forever`}
      >
        <DeleteForm table="pots" id={data.id} close={closeDeleteModal} />
      </Modal>
    </div>
  )
}
