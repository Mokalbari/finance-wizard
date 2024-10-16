import { useRef } from "react"
import Modal from "../modal/modal"
import BudgetForm from "@/src/app/(main)/budget/_components/budget-form"
import clsx from "clsx"
import PotForm from "../modal/pot-form"
import { useModal } from "@/src/hooks/useModal"

type Props = {
  category: "Budget" | "Pots"
  text: string
  isOpen: boolean
}

export default function CardOptionList({ isOpen, text, category }: Props) {
  const editModalRef = useRef<HTMLDialogElement>(null)
  const deleteModalRef = useRef<HTMLDialogElement>(null)

  const { openModal, closeModal } = useModal(editModalRef)

  return (
    <div
      className={clsx("absolute right-0 top-6 w-max", {
        hidden: !isOpen,
      })}
    >
      <ul className="rounded-lg bg-white px-5 text-sm shadow-lg">
        <li className="py-3">
          <button onClick={openModal}>Edit {text}</button>
        </li>
        <li className="border-t border-t-grey-100 py-3 text-red">
          Delete {text}
        </li>
      </ul>
      <Modal
        ref={editModalRef}
        close={closeModal}
        modalTitle={category === "Budget" ? "Edit Budget" : "Edit Pot"}
        modalDesc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."
      >
        {category === "Budget" ? <BudgetForm /> : <PotForm />}
      </Modal>
      <Modal
        ref={deleteModalRef}
        close={closeModal}
        modalTitle={category === "Budget" ? "Delete Budget" : "Delete Pot"}
        modalDesc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."
      >
        {category === "Budget" ? <BudgetForm /> : <PotForm />}
      </Modal>
    </div>
  )
}
