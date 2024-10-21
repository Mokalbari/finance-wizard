import Image from "next/image"
// type Props = {}

import AuthentificationForm from "@/src/ui/shared/authentification/authentification-form"
import FinanceHeader from "@/src/ui/shared/authentification/finance-header"
import LoginFormField from "./_components/login-form-field"

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center max-lg:flex-col lg:mx-5 lg:gap-4">
      <div className="max-lg:hidden">
        <Image
          style={{ borderRadius: "0.75rem" }}
          src="/illustration-authentication.svg"
          width={560}
          height={920}
          alt="a person running and reaching towards a flying money bill, symbolizing movement. The character is dressed casually, with a baseball cap and sneakers, and has an energetic posture."
        />
      </div>
      <div className="absolute left-0 top-0 w-full lg:hidden">
        <FinanceHeader />
      </div>
      <div className="w-full max-lg:px-4 sm:max-w-[35rem] lg:mx-auto">
        <AuthentificationForm isSigningUp={false}>
          <LoginFormField />
        </AuthentificationForm>
      </div>
    </div>
  )
}
