import type { RefObject } from "react"

export const useModal = (ref: RefObject<HTMLDialogElement>) => {
  const openModal = () => {
    ref.current?.showModal()
  }

  const closeModal = () => {
    ref.current?.close()
  }

  return { openModal, closeModal }
}
