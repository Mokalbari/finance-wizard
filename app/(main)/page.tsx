import PageTitle from "../ui/shared/atoms/page-title"
import OverviewGrid from "./_components/overview-grid"

export default function Home() {
  return (
    <div className="max-lg:mx-auto max-lg:max-w-[90%]">
      <PageTitle htmlTag="h1" text="Overview" className="mt-6 sm:mt-10" />
      <OverviewGrid className="mt-8" />
    </div>
  )
}
