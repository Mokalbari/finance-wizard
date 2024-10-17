// type Props = {}
import PotCardContextProvider from "@/src/context/pots-context"
import PageTitle from "@/src/ui/shared/atoms/page-title"
import PotsCard from "./_components/pots-card"
import AddButton from "@/src/ui/shared/atoms/add-button"
import { fetchPotsCard } from "./actions"

export default async function Page() {
  const potsCardData = await fetchPotsCard()

  return (
    <main className="mx-4 mt-6">
      <header className="flex items-center justify-between">
        <PageTitle htmlTag="h1" text="Pots" className="" />
        <AddButton isBlack showBefore text="Add New Pot" />
      </header>
      <section className="mt-8">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-6">
          {potsCardData.map(cardInfo => (
            <li key={cardInfo.id} className="">
              <PotCardContextProvider data={cardInfo}>
                <PotsCard data={cardInfo} />
              </PotCardContextProvider>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
