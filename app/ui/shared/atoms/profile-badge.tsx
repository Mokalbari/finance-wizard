import Image from "next/image"
import ethan from "/public/ethan-clark.jpg"

type Props = {
  showCategory?: boolean
}

export default function ProfileBadge({ showCategory = false }: Props) {
  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="max-w-8 sm:max-w-10">
        <Image src={ethan} alt="user avatar" style={{ borderRadius: "50%" }} />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Ethan Clark</span>
        {showCategory && <span className="text-grey-500">General</span>}
      </div>
    </div>
  )
}
