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
        <ul className="grid gap-6 max-lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(520px,1fr))]">
          {potsCardData.map(cardInfo => (
            <li
              key={cardInfo.id}
              className="last-of-type:mb-32 lg:last-of-type:mb-12"
            >
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
