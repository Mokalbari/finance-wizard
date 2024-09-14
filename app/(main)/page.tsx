import PageTitle from "../ui/shared/atoms/page-title"
import OverviewGrid from "./_components/overview-grid"
import PotsSection from "./_components/pots-section"

export default function Home() {
  return (
    <div className="mb-48 max-lg:mx-auto max-lg:max-w-[90%]">
      <PageTitle htmlTag="h1" text="Overview" className="mt-6 sm:mt-10" />
      <OverviewGrid className="mt-8" />
      <PotsSection className="mt-8" />
    </div>
  )
}
