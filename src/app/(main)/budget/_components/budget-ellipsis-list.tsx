"use client"

import { useRef } from "react"
import Modal from "../../../../ui/shared/modal/modal"
import BudgetForm from "@/src/app/(main)/budget/_components/budget-form"
import { useModal } from "@/src/hooks/useModal"
import DeleteForm from "../../../../ui/shared/modal/delete-form"
import { useBudgetCardContext } from "@/src/context/budget-context"

export default function BudgetEllipsisList() {
  const { data } = useBudgetCardContext()
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
          <button onClick={openEditModal}>Edit {data.category}</button>
        </li>
        <li className="border-t border-t-grey-100 py-3 text-red">
          <button onClick={openDeleteModal}>Delete {data.category}</button>
        </li>
      </ul>
      <Modal
        ref={editModalRef}
        close={closeEditModal}
        modalTitle={`Edit '${data.category}'`}
        modalDesc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."
      >
        <BudgetForm />
      </Modal>
      <Modal
        ref={deleteModalRef}
        close={closeDeleteModal}
        modalTitle={`Delete '${data.category}'`}
        modalDesc={`Are you sure you want to delete ${data.category}? This action cannot be reversed, and all the data inside it will be removed forever`}
      >
        <DeleteForm close={closeDeleteModal} />
      </Modal>
    </div>
  )
}
