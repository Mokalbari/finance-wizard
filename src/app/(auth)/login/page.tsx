// type Props = {}

import AuthentificationForm from "@/ui/shared/authentification/authentification-form"
import LoginFormField from "./_components/login-form-field"

export default function Page() {
  return (
    <AuthentificationForm isSigningUp={false}>
      <LoginFormField />
    </AuthentificationForm>
  )
}
