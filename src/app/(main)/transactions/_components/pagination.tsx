"use client"

import { cn } from "@/helpers/style"
import useScreenSize from "@/hooks/useScreenSize"
import { generatePagination } from "@/lib/functions/general-utils/generatePagination"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import NavButton from "./nav-button"

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
      <NavButton
        createPageUrl={createPageURL}
        currentPage={currentPage}
        totalPages={totalPages}
        direction="left"
      />

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

      <NavButton
        createPageUrl={createPageURL}
        currentPage={currentPage}
        totalPages={totalPages}
        direction="right"
      />
    </div>
  )
}
