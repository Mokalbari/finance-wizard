"use client"
// Hooks
import { useState } from "react"
import useScreenSize from "@/app/hooks/useScreenSize"
import { usePathname } from "next/navigation"

// Utils
// import clsx from "clsx"

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
import clsx from "clsx"

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
      icon: (
        <HomeIcon
          className={clsx("fill-grey-300", {
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
        <TransactionIcon
          className={clsx("fill-grey-300", {
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
        <BudgetIcon
          className={clsx("fill-grey-300", {
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
        <PotIcon
          className={clsx("fill-grey-300", {
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
        <BillIcon
          className={clsx("fill-grey-300", {
            "fill-green": pathname === "/bills",
          })}
        />
      ),
    },
  ]

  const logo = isLaptop && (isOpen ? <LogoLarge /> : <LogoSmall />)

  return (
    <nav className="bg-grey-900 font-bold text-white">
      {logo}

      <menu>
        {links.map(link => (
          <li key={link.id}>
            {link.icon}
            <span>{link.text}</span>
          </li>
        ))}
      </menu>
      {isLaptop && (
        <div onClick={openMenu}>
          <Arrow />
          <span>Minimize Menu</span>
        </div>
      )}
    </nav>
  )
}
