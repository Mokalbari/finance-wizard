"use client"

// Hooks
import { useState } from "react"
import useScreenSize from "@/app/hooks/useScreenSize"
import { usePathname } from "next/navigation"

// Utils
import clsx from "clsx"
import Link from "next/link"

// Icons - SVG
import Logo from "./logo"
import HomeIcon from "./home-icon"
import TransactionIcon from "./transaction-icon"
import BudgetIcon from "./budget-icon"
import PotIcon from "./pots-icon"
import BillIcon from "./bill-icon"
import Arrow from "../../icons/icon-minimize-menu.svg"

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
      icon:
        pathname === "/" ? (
          <HomeIcon className="fill-green" />
        ) : (
          <HomeIcon className="fill-grey-300" />
        ),
    },
    {
      id: 2,
      path: "/transactions",
      text: "Transactions",
      icon:
        pathname === "/transactions" ? (
          <TransactionIcon className="fill-green" />
        ) : (
          <TransactionIcon className="fill-grey-300" />
        ),
    },
    {
      id: 3,
      path: "/budget",
      text: "Budget",
      icon:
        pathname === "/budget" ? (
          <BudgetIcon className="fill-green" />
        ) : (
          <BudgetIcon className="fill-grey-300" />
        ),
    },
    {
      id: 4,
      path: "/pots",
      text: "Pots",
      icon:
        pathname === "/pots" ? (
          <PotIcon className="fill-green" />
        ) : (
          <PotIcon className="fill-grey-300" />
        ),
    },
    {
      id: 5,
      path: "/bills",
      text: "Recurring bills",
      icon:
        pathname === "/bills" ? (
          <BillIcon className="fill-green" />
        ) : (
          <BillIcon className="fill-grey-300" />
        ),
    },
  ]

  return (
    <nav
      aria-label="main navigation"
      className={clsx(
        "fixed bottom-0 left-0 w-full bg-grey-900 px-2 pt-2 font-bold text-white max-lg:rounded-t-lg",
        "lg:static lg:flex lg:min-h-svh lg:w-fit lg:flex-col lg:justify-between lg:rounded-r-lg lg:pl-0 lg:pr-4",
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
                <span className={clsx("max-sm:hidden", { hidden: !isOpen })}>
                  {link.text}
                </span>
              </Link>
            </li>
          ))}
        </menu>
      </div>
      {isLaptop && (
        <button onClick={openMenu} className="mb-20 flex gap-6 px-6 py-4">
          <Arrow />
          <span className={clsx({ hidden: !isOpen })}>Minimize Menu</span>
        </button>
      )}
    </nav>
  )
}
