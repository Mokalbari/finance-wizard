"use client"

import { useRef } from "react"
import Modal from "../../../../ui/shared/modal/modal"
import PotForm from "./pot-form"
import { useModal } from "@/src/hooks/useModal"
import DeleteForm from "../../../../ui/shared/modal/delete-form"
import { usePotCardContext } from "@/src/context/pots-context"

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
        modalDesc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."
      >
        <PotForm />
      </Modal>
      <Modal
        ref={deleteModalRef}
        close={closeDeleteModal}
        modalTitle={`Delete '${data.name}'`}
        modalDesc={`Are you sure you want to delete ${data.name}? This action cannot be reversed, and all the data inside it will be removed forever`}
      >
        <DeleteForm close={closeDeleteModal} />
      </Modal>
    </div>
  )
}
