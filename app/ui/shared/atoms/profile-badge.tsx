import Image from "next/image"

type Props = {
  imgSrc: string
  name: string
  category: string
  showCategory?: boolean
}

export default function ProfileBadge({
  imgSrc,
  name,
  category,
  showCategory = false,
}: Props) {
  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="max-w-8 sm:max-w-10">
        <Image
          src={imgSrc}
          width={40}
          height={40}
          alt="user avatar"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{name}</span>
        {showCategory && <span className="text-grey-500">{category}</span>}
      </div>
    </div>
  )
}
