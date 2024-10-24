// type Props = {}

import AuthentificationForm from "@/components/authentification/authentification-form"
import LoginFormField from "./_components/login-form-field"

export default function Page() {
  return (
    <AuthentificationForm isSigningUp={false}>
      <LoginFormField />
    </AuthentificationForm>
  )
}
