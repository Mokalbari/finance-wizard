import AddButton from "./ui/shared/add-button"
import ColorDot from "./ui/shared/color-dot"
import InputField from "./ui/shared/input-field"
import PageTitle from "./ui/shared/page-title"
import ProfileBadge from "./ui/shared/profile-badge"

export default function Home() {
  return (
    <div className="">
      <ProfileBadge />
      <PageTitle text="Pots" htmlTag="h1" />
      <div className="flex flex-col items-start">
        <AddButton text="Add New Pot" showBefore={true} />
        <InputField placeholder="e.g. Rainy Days" show="dollar" />
      </div>
    </div>
  )
}
