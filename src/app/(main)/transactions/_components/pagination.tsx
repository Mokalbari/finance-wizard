"use client"

import CaretLeft from "@/assets/icons/icon-caret-left.svg"
import CaretRight from "@/assets/icons/icon-caret-right.svg"
import { cn } from "@/helpers/style"
import useScreenSize from "@/hooks/useScreenSize"
import { generatePagination } from "@/lib/functions/general-utils/generatePagination"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

type Props = {
  totalPages: number
}

export default function Pagination({ totalPages }: Props) {
  const { isMobile } = useScreenSize()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1

  const allPages = generatePagination(currentPage, totalPages, isMobile)

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <div className="mt-6 flex justify-between text-sm">
      <button className="flex items-center gap-4 rounded-lg border border-grey-900 bg-white px-5 py-3">
        <span>
          <CaretLeft />
        </span>
        <span className="max-sm:hidden">Prev</span>
      </button>

      <div className="flex gap-2">
        {allPages.map(page => (
          <Link key={page} href={createPageURL(page)}>
            <button
              className={cn(
                "h-10 w-10 rounded-lg border border-grey-900 bg-white text-black",
                { "bg-black text-white": page === currentPage },
              )}
            >
              {page}
            </button>
          </Link>
        ))}
      </div>
      <button className="flex items-center gap-4 rounded-lg border border-grey-900 bg-white px-5 py-3">
        <span className="max-sm:hidden">Next</span>
        <span>
          <CaretRight />
        </span>
      </button>
    </div>
  )
}
