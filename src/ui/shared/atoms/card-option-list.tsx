import { useRef } from "react"
import Modal from "../modal/modal"
import BudgetForm from "@/src/app/(main)/budget/_components/budget-form"
import clsx from "clsx"
import PotForm from "../modal/pot-form"
import { useModal } from "@/src/hooks/useModal"
import DeleteForm from "../modal/delete-form"

type Props = {
  category: "Budget" | "Pots"
  text: string
  isOpen: boolean
}

export default function CardOptionList({ isOpen, text, category }: Props) {
  const editModalRef = useRef<HTMLDialogElement>(null)
  const deleteModalRef = useRef<HTMLDialogElement>(null)

  const { openModal: openEditModal, closeModal: closeEditModal } =
    useModal(editModalRef)
  const { openModal: openDeleteModal, closeModal: closeDeleteModal } =
    useModal(deleteModalRef)

  return (
    <div
      className={clsx("absolute right-0 top-6 w-max", {
        hidden: !isOpen,
      })}
    >
      <ul className="rounded-lg bg-white px-5 text-sm shadow-lg">
        <li className="py-3">
          <button onClick={openEditModal}>Edit {text}</button>
        </li>
        <li className="border-t border-t-grey-100 py-3 text-red">
          <button onClick={openDeleteModal}>Delete {text}</button>
        </li>
      </ul>
      <Modal
        ref={editModalRef}
        close={closeEditModal}
        modalTitle={category === "Budget" ? "Edit Budget" : "Edit Pot"}
        modalDesc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."
      >
        {category === "Budget" ? <BudgetForm /> : <PotForm />}
      </Modal>
      <Modal
        ref={deleteModalRef}
        close={closeDeleteModal}
        modalTitle={category === "Budget" ? "Delete Budget" : "Delete Pot"}
        modalDesc="Are you sure you want to delete this item? This action cannot be reversed, and all the data inside it will be removed forever"
      >
        <DeleteForm />
      </Modal>
    </div>
  )
}
