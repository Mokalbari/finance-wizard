// type Props = {}

import AuthentificationForm from "@/src/ui/shared/authentification/authentification-form"
import SignupFormField from "./_components/signup-form-field"

export default function Page() {
  return (
    <div>
      <AuthentificationForm isSigningUp>
        <SignupFormField />
      </AuthentificationForm>
    </div>
  )
}
