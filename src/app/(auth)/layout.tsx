import Logo from "@/src/ui/shared/atoms/logo"
import FinanceHeader from "@/src/ui/shared/authentification/finance-header"
import Image from "next/image"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen items-center justify-center max-lg:flex-col lg:mx-5 lg:gap-4">
      <div className="relative max-lg:hidden">
        <Image
          style={{ borderRadius: "0.75rem" }}
          src="/illustration-authentication.svg"
          width={560}
          height={920}
          alt="a person running and reaching towards a flying money bill, symbolizing movement. The character is dressed casually, with a baseball cap and sneakers, and has an energetic posture."
        />
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-xl font-bold leading-10">
            Keep track of your money <br />
            and save for you future
          </p>
          <p className="mt-6 text-sm text-white/85">
            Personal finance app puts you in control of your spending. Track{" "}
            <br />
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
        <Logo isOpen className="absolute left-8 top-8" />
      </div>
      <div className="absolute left-0 top-0 w-full lg:hidden">
        <FinanceHeader />
      </div>
      <div className="w-full max-lg:px-4 sm:max-w-[35rem] lg:mx-auto">
        {children}
      </div>
    </div>
  )
}
