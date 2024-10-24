import CloseIcon from "@/assets/icons/icon-close-modal.svg"
import { forwardRef, ReactNode } from "react"

type Props = {
  modalTitle: string
  modalDesc: string
  close: () => void
  children: ReactNode
}

const Modal = forwardRef<HTMLDialogElement, Props>(
  ({ modalTitle, modalDesc, children, close }, ref) => {
    return (
      <dialog
        className="max-w-[85%] rounded-lg px-5 py-6 text-grey-500 sm:max-w-[55ch]"
        ref={ref}
      >
        <header>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-black sm:text-xl">
              {modalTitle}
            </h2>
            <button aria-label="Close modal" onClick={close}>
              <CloseIcon />
            </button>
          </div>
          <p className="mt-5 text-sm">{modalDesc}</p>
        </header>
        <section className="mt-5">{children}</section>
      </dialog>
    )
  },
)

Modal.displayName = "Modal"

export default Modal
