"use client"

import { ReactNode } from "react"
import AddButton from "../atoms/add-button"
import PageTitle from "../atoms/page-title"

type Props = {
  isSigningUp: boolean
  children: ReactNode
}

export default function AuthentificationForm({ isSigningUp, children }: Props) {
  // const initialState: FormMessages = {
  //   name: "",
  //   email: "",
  //   password: "",
  //   errors: {
  //     name: [],
  //     email: [],
  //     password: [],
  //   },
  // }

  // const [state, formAction] = useFormState(signup, initialState)
  // const { pending } = useFormStatus()

  return (
    <form
      className="flex flex-col rounded-lg bg-white px-5 py-6"
      action="POST" // remplacer par useFormState
    >
      <PageTitle text={isSigningUp ? "Sign Up" : "Login"} className="" />
      <div className="mt-8 flex flex-col gap-4">{children}</div>
      <AddButton
        className="mt-8"
        type="submit"
        isBlack
        text={isSigningUp ? "Create Account" : "Login"}
        showBefore={false}
        // disabled={pending}
      />
      {isSigningUp ? (
        <p className="mt-8 self-center text-sm text-grey-500">
          Already have an account?{" "}
          <span className="font-bold text-grey-900 underline">Login</span>
        </p>
      ) : (
        <p className="mt-8 self-center text-sm text-grey-500">
          Need to create an account?{" "}
          <span className="font-bold text-grey-900 underline">Sign Up</span>
        </p>
      )}
    </form>
  )
}
