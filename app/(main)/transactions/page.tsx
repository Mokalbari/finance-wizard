// type Props = {}

import InputField from "@/app/ui/shared/atoms/input-field"
import PageTitle from "@/app/ui/shared/atoms/page-title"
import DropDownMenu from "./_components/dropdown-menu"

export default function Page() {
  return (
    <div className="mb-48 max-lg:mx-auto max-lg:max-w-[90%]">
      <PageTitle htmlTag="h1" text="Transactions" className="mt-6 sm:mt-10" />
      <section>
        <div className="flex items-center gap-6">
          <InputField placeholder="Search transaction" show="loop" />
          <DropDownMenu dropdownData="sort" />
          <DropDownMenu dropdownData="filter" />
        </div>
      </section>
    </div>
  )
}
