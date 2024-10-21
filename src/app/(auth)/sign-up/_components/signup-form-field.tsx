// type Props = {}

export default function SignupFormField() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs font-bold text-grey-500">
          Name
        </label>
        <input type="text" className="rounded-lg border border-grey-500 py-2" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs font-bold text-grey-500">
          Email
        </label>
        <input type="text" className="rounded-lg border border-grey-500 py-2" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-xs font-bold text-grey-500">
          Create password
        </label>
        <input
          type="password"
          className="rounded-lg border border-grey-500 py-2"
        />
      </div>
    </>
  )
}
