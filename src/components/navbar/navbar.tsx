"use client"

import useScreenSize from "@/hooks/useScreenSize"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { cn } from "@/helpers/style"
import Link from "next/link"

import Arrow from "@/assets/icons/icon-minimize-menu.svg"
import IconBudgets from "@/assets/icons/icon-nav-budgets.svg"
import IconOverview from "@/assets/icons/icon-nav-overview.svg"
import IconPots from "@/assets/icons/icon-nav-pots.svg"
import IconRecurringBills from "@/assets/icons/icon-nav-recurring-bills.svg"
import IconTransactions from "@/assets/icons/icon-nav-transactions.svg"
import Logo from "@/components/ui/logo"
import clsx from "clsx"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname()
  const { isLaptop } = useScreenSize()

  const openMenu = () => {
    setIsOpen(prevState => !prevState)
  }

  const links = [
    {
      id: 1,
      path: "/",
      text: "Overview",
      icon: (
        <IconOverview
          className={cn("size-6 fill-grey-300", {
            "fill-green": pathname === "/",
          })}
        />
      ),
    },
    {
      id: 2,
      path: "/transactions",
      text: "Transactions",
      icon: (
        <IconTransactions
          className={cn("size-6 fill-grey-300", {
            "fill-green": pathname === "/transactions",
          })}
        />
      ),
    },
    {
      id: 3,
      path: "/budget",
      text: "Budget",
      icon: (
        <IconBudgets
          className={cn("size-6 fill-grey-300", {
            "fill-green": pathname === "/budget",
          })}
        />
      ),
    },
    {
      id: 4,
      path: "/pots",
      text: "Pots",
      icon: (
        <IconPots
          className={cn("size-6 fill-grey-300", {
            "fill-green": pathname === "/pots",
          })}
        />
      ),
    },
    {
      id: 5,
      path: "/bills",
      text: "Recurring bills",
      icon: (
        <IconRecurringBills
          className={cn("size-6 fill-grey-300", {
            "fill-green": pathname === "/bills",
          })}
        />
      ),
    },
  ]

  return (
    <nav
      aria-label="main navigation"
      className={clsx(
        "fixed bottom-0 left-0 w-full bg-grey-900 px-2 pt-2 font-bold text-white max-lg:rounded-t-lg",
        "lg:static lg:flex lg:w-fit lg:flex-col lg:justify-between lg:rounded-r-lg lg:pl-0 lg:pr-4",
      )}
    >
      <div>
        {isLaptop && <Logo isOpen={isOpen} className="mx-8 mt-10" />}
        <menu className={clsx("flex justify-around lg:mt-16 lg:flex-col")}>
          {links.map(link => (
            <li
              key={link.id}
              className={clsx(
                "flex flex-col items-center gap-1 bg-grey-900 px-6 py-4",
                "lg:flex-row lg:gap-6",
                {
                  "bg-white text-grey-900 max-lg:rounded-t-lg max-lg:border-b-8 max-lg:border-b-green lg:rounded-r-lg lg:border-l-4 lg:border-l-green":
                    pathname === link.path,
                },
                {
                  "lg:pr-16": isOpen,
                },
              )}
            >
              {link.icon}
              <Link href={link.path}>
                <span
                  className={clsx("max-sm:hidden", {
                    hidden: !isOpen,
                  })}
                >
                  {link.text}
                </span>
              </Link>
            </li>
          ))}
        </menu>
      </div>
      {isLaptop && (
        <button onClick={openMenu} className="mb-20 flex gap-6 px-6 py-4">
          <div className={clsx("transition-all", { "rotate-180": !isOpen })}>
            <Arrow />
          </div>
          <span className={clsx({ hidden: !isOpen })}>Minimize Menu</span>
        </button>
      )}
    </nav>
  )
}
