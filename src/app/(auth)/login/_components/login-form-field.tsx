// type Props = {}

export default function LoginFormField() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs font-bold text-grey-500">
          Email
        </label>
        <input type="text" className="rounded-lg border border-grey-500 p-2" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-xs font-bold text-grey-500">
          Password
        </label>
        <input type="text" className="rounded-lg border border-grey-500 p-2" />
      </div>
    </>
  )
}
