"use client"

import BudgetForm from "@/app/(main)/budget/_components/budget-form"
import { useBudgetCardContext } from "@/context/budget-context"
import { useModal } from "@/hooks/useModal"
import { useRef } from "react"
import DeleteForm from "../../../../components/modal/delete-form"
import Modal from "../../../../components/modal/modal"

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
        <BudgetForm id={data.id} method="PUT" close={closeEditModal} />
      </Modal>
      <Modal
        ref={deleteModalRef}
        close={closeDeleteModal}
        modalTitle={`Delete '${data.category}'`}
        modalDesc={`Are you sure you want to delete ${data.category}? This action cannot be reversed, and all the data inside it will be removed forever`}
      >
        <DeleteForm table="budgets" id={data.id} close={closeDeleteModal} />
      </Modal>
    </div>
  )
}
