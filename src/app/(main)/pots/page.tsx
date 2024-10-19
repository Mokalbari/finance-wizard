// type Props = {}
import PotCardContextProvider from "@/src/context/pots-context"
import AddPotModal from "./_components/add-pot-modal"
import PotsCard from "./_components/pots-card"
import { fetchPotsCard } from "./actions"

export default async function Page() {
  const potsCardData = await fetchPotsCard()

  return (
    <main className="mx-4 mt-6">
      <AddPotModal />
      <section className="mt-8">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(550px,1fr))] gap-6">
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
