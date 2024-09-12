"use client"
// Hooks
import { useState } from "react"
import useScreenSize from "@/app/hooks/useScreenSize"
import { usePathname } from "next/navigation"

// Utils
import clsx from "clsx"

// Components

// Icons - SVG
import HomeIcon from "./home-icon"
import TransactionIcon from "./transaction-icon"
import BudgetIcon from "./budget-icon"
import PotIcon from "./pots-icon"
import BillIcon from "./bill-icon"
import LogoLarge from "../../icons/logo-large.svg"
import LogoSmall from "../../icons/logo-small.svg"
import Arrow from "../../icons/icon-minimize-menu.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
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

  const logo = isLaptop && (isOpen ? <LogoLarge /> : <LogoSmall />)

  return (
    <nav
      className={clsx(
        "fixed bottom-0 left-0 w-full bg-grey-900 px-2 pt-2 font-bold text-white max-lg:rounded-tl-lg",
        "lg:static lg:min-h-svh lg:w-fit lg:rounded-r-lg lg:pl-0",
      )}
    >
      {logo}

      <menu className={clsx("flex justify-around lg:flex-col")}>
        {links.map(link => (
          <li
            key={link.id}
            className={clsx(
              "flex flex-col items-center gap-1 bg-grey-900 px-6 py-4",
              "lg:flex-row lg:gap-6",
              {
                "border-b-8 border-b-green bg-white text-grey-900 max-lg:rounded-t-lg lg:rounded-r-lg":
                  pathname === link.path,
              },
              {
                "lg:pr-16": isOpen,
              },
            )}
          >
            {link.icon}
            <span className={clsx("max-sm:hidden", { hidden: !isOpen })}>
              {link.text}
            </span>
          </li>
        ))}
      </menu>
      {isLaptop && (
        <div onClick={openMenu}>
          <Arrow />
          <span className={clsx({ hidden: !isOpen })}>Minimize Menu</span>
        </div>
      )}
    </nav>
  )
}
