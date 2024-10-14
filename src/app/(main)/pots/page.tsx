// type Props = {}

import PageTitle from "@/src/ui/shared/atoms/page-title"
import PotsCard from "./_components/pots-card"
import AddButton from "@/src/ui/shared/atoms/add-button"

export default function Page() {
  return (
    <main className="mx-4 mt-6">
      <header className="flex items-center justify-between">
        <PageTitle htmlTag="h1" text="Pots" className="" />
        <AddButton isBlack showBefore text="Add New Pot" />
      </header>
      <PotsCard />
    </main>
  )
}
