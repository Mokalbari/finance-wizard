import AddButton from "./ui/shared/add-button"
import PageTitle from "./ui/shared/page-title"
import ProfileBadge from "./ui/shared/profile-badge"

export default function Home() {
  return (
    <div className="">
      <ProfileBadge />
      <PageTitle text="Pots" htmlTag="h1" />
      <AddButton text="Add New Pot" />
    </div>
  )
}
