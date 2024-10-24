"use client"

import { useFormState } from "react-dom"
import { signup } from "../actions"

export default function SignupFormField() {
  const [state] = useFormState(signup, undefined)

  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs font-bold text-grey-500">
          Name
        </label>
        <input
          required
          name="name"
          type="text"
          className="rounded-lg border border-grey-500 py-2"
        />
        {state?.errors?.name && <p>{state.errors.name}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs font-bold text-grey-500">
          Email
        </label>
        <input
          required
          name="email"
          type="text"
          className="rounded-lg border border-grey-500 py-2"
        />
        {state?.errors?.email && <p>{state.errors.email}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-xs font-bold text-grey-500">
          Create password
        </label>
        <input
          required
          name="password"
          type="password"
          className="rounded-lg border border-grey-500 py-2"
        />
        {state?.errors?.password && <p>{state.errors.password}</p>}
      </div>
    </>
  )
}
