import type { ColorPaletteObj, SortBy } from "./types/definitions"

export const transactions = [
  {
    avatar: "/avatars/emma-richardson.jpg",
    colorName: "Emma Richardson",
    category: "General",
    date: "2024-08-19T14:23:11Z",
    amount: 75.5,
    recurring: false,
  },
  {
    avatar: "/avatars/savory-bites-bistro.jpg",
    colorName: "Savory Bites Bistro",
    category: "Dining Out",
    date: "2024-08-19T20:23:11Z",
    amount: -55.5,
    recurring: false,
  },
  {
    avatar: "/avatars/daniel-carter.jpg",
    colorName: "Daniel Carter",
    category: "General",
    date: "2024-08-18T09:45:32Z",
    amount: -42.3,
    recurring: false,
  },
  {
    avatar: "/avatars/sun-park.jpg",
    colorName: "Sun Park",
    category: "General",
    date: "2024-08-17T16:12:05Z",
    amount: 120.0,
    recurring: false,
  },
  {
    avatar: "/avatars/urban-services-hub.jpg",
    colorName: "Urban Services Hub",
    category: "General",
    date: "2024-08-17T21:08:09Z",
    amount: -65.0,
    recurring: false,
  },
  {
    avatar: "/avatars/liam-hughes.jpg",
    colorName: "Liam Hughes",
    category: "Groceries",
    date: "2024-08-15T18:20:33Z",
    amount: 65.75,
    recurring: false,
  },
  {
    avatar: "/avatars/lily-ramirez.jpg",
    colorName: "Lily Ramirez",
    category: "General",
    date: "2024-08-14T13:05:27Z",
    amount: 50.0,
    recurring: false,
  },
  {
    avatar: "/avatars/ethan-clark.jpg",
    colorName: "Ethan Clark",
    category: "Dining Out",
    date: "2024-08-13T20:15:59Z",
    amount: -32.5,
    recurring: false,
  },
  {
    avatar: "/avatars/james-thompson.jpg",
    colorName: "James Thompson",
    category: "Entertainment",
    date: "2024-08-11T15:45:38Z",
    amount: -5.0,
    recurring: false,
  },
  {
    avatar: "/avatars/pixel-playground.jpg",
    colorName: "Pixel Playground",
    category: "Entertainment",
    date: "2024-08-11T18:45:38Z",
    amount: -10.0,
    recurring: true,
  },
  {
    avatar: "/avatars/ella-phillips.jpg",
    colorName: "Ella Phillips",
    category: "Dining Out",
    date: "2024-08-10T19:22:51Z",
    amount: -45.0,
    recurring: false,
  },
  {
    avatar: "/avatars/sofia-peterson.jpg",
    colorName: "Sofia Peterson",
    category: "Transportation",
    date: "2024-08-08T08:55:17Z",
    amount: -15.0,
    recurring: false,
  },
  {
    avatar: "/avatars/mason-martinez.jpg",
    colorName: "Mason Martinez",
    category: "Lifestyle",
    date: "2024-08-07T17:40:29Z",
    amount: -35.25,
    recurring: false,
  },
  {
    avatar: "/avatars/green-plate-eatery.jpg",
    colorName: "Green Plate Eatery",
    category: "Groceries",
    date: "2024-08-06T08:25:44Z",
    amount: -78.5,
    recurring: false,
  },
  {
    avatar: "/avatars/sebastian-cook.jpg",
    colorName: "Sebastian Cook",
    category: "Transportation",
    date: "2024-08-06T10:05:44Z",
    amount: -22.5,
    recurring: false,
  },
  {
    avatar: "/avatars/william-harris.jpg",
    colorName: "William Harris",
    category: "Personal Care",
    date: "2024-08-05T14:30:56Z",
    amount: -10.0,
    recurring: false,
  },
  {
    avatar: "/avatars/elevate-education.jpg",
    colorName: "Elevate Education",
    category: "Education",
    date: "2024-08-04T11:15:22Z",
    amount: -50.0,
    recurring: true,
  },
  {
    avatar: "/avatars/serenity-spa-and-wellness.jpg",
    colorName: "Serenity Spa & Wellness",
    category: "Personal Care",
    date: "2024-08-03T14:00:37Z",
    amount: -30.0,
    recurring: true,
  },
  {
    avatar: "/avatars/spark-electric-solutions.jpg",
    colorName: "Spark Electric Solutions",
    category: "Bills",
    date: "2024-08-02T09:25:11Z",
    amount: -100.0,
    recurring: true,
  },
  {
    avatar: "/avatars/rina-sato.jpg",
    colorName: "Rina Sato",
    category: "Bills",
    date: "2024-08-02T13:31:11Z",
    amount: -50.0,
    recurring: false,
  },
  {
    avatar: "/avatars/swift-ride-share.jpg",
    colorName: "Swift Ride Share",
    category: "Transportation",
    date: "2024-08-01T18:40:33Z",
    amount: -18.75,
    recurring: false,
  },
  {
    avatar: "/avatars/aqua-flow-utilities.jpg",
    colorName: "Aqua Flow Utilities",
    category: "Bills",
    date: "2024-07-30T13:20:14Z",
    amount: -100.0,
    recurring: true,
  },
  {
    avatar: "/avatars/ecofuel-energy.jpg",
    colorName: "EcoFuel Energy",
    category: "Bills",
    date: "2024-07-29T11:55:29Z",
    amount: -35.0,
    recurring: true,
  },
  {
    avatar: "/avatars/yuna-kim.jpg",
    colorName: "Yuna Kim",
    category: "Dining Out",
    date: "2024-07-29T13:51:29Z",
    amount: -28.5,
    recurring: false,
  },
  {
    avatar: "/avatars/flavor-fiesta.jpg",
    colorName: "Flavor Fiesta",
    category: "Dining Out",
    date: "2024-07-27T20:15:06Z",
    amount: -42.75,
    recurring: false,
  },
  {
    avatar: "/avatars/harper-edwards.jpg",
    colorName: "Harper Edwards",
    category: "Shopping",
    date: "2024-07-26T09:43:23Z",
    amount: -89.99,
    recurring: false,
  },
  {
    avatar: "/avatars/buzz-marketing-group.jpg",
    colorName: "Buzz Marketing Group",
    category: "General",
    date: "2024-07-26T14:40:23Z",
    amount: 3358.0,
    recurring: false,
  },
  {
    avatar: "/avatars/technova-innovations.jpg",
    colorName: "TechNova Innovations",
    category: "Shopping",
    date: "2024-07-25T16:25:37Z",
    amount: -29.99,
    recurring: false,
  },
  {
    avatar: "/avatars/bytewise.jpg",
    colorName: "ByteWise",
    category: "Lifestyle",
    date: "2024-07-23T09:35:14Z",
    amount: -49.99,
    recurring: true,
  },
  {
    avatar: "/avatars/nimbus-data-storage.jpg",
    colorName: "Nimbus Data Storage",
    category: "Bills",
    date: "2024-07-21T10:05:42Z",
    amount: -9.99,
    recurring: true,
  },
  {
    avatar: "/avatars/emma-richardson.jpg",
    colorName: "Emma Richardson",
    category: "General",
    date: "2024-07-20T17:30:55Z",
    amount: -25.0,
    recurring: false,
  },
  {
    avatar: "/avatars/daniel-carter.jpg",
    colorName: "Daniel Carter",
    category: "General",
    date: "2024-07-19T12:45:09Z",
    amount: 50.0,
    recurring: false,
  },
  {
    avatar: "/avatars/sun-park.jpg",
    colorName: "Sun Park",
    category: "General",
    date: "2024-07-18T19:20:23Z",
    amount: -38.5,
    recurring: false,
  },
  {
    avatar: "/avatars/harper-edwards.jpg",
    colorName: "Harper Edwards",
    category: "Shopping",
    date: "2024-07-17T14:55:37Z",
    amount: -29.99,
    recurring: false,
  },
  {
    avatar: "/avatars/liam-hughes.jpg",
    colorName: "Liam Hughes",
    category: "Groceries",
    date: "2024-07-16T10:10:51Z",
    amount: -52.75,
    recurring: false,
  },
  {
    avatar: "/avatars/lily-ramirez.jpg",
    colorName: "Lily Ramirez",
    category: "General",
    date: "2024-07-15T16:35:04Z",
    amount: 75.0,
    recurring: false,
  },
  {
    avatar: "/avatars/ethan-clark.jpg",
    colorName: "Ethan Clark",
    category: "Dining Out",
    date: "2024-07-14T20:50:18Z",
    amount: -41.25,
    recurring: false,
  },
  {
    avatar: "/avatars/rina-sato.jpg",
    colorName: "Rina Sato",
    category: "Entertainment",
    date: "2024-07-13T09:15:32Z",
    amount: -10.0,
    recurring: false,
  },
  {
    avatar: "/avatars/james-thompson.jpg",
    colorName: "James Thompson",
    category: "Bills",
    date: "2024-07-12T13:40:46Z",
    amount: -95.5,
    recurring: false,
  },
  {
    avatar: "/avatars/ella-phillips.jpg",
    colorName: "Ella Phillips",
    category: "Dining Out",
    date: "2024-07-11T18:05:59Z",
    amount: -33.75,
    recurring: false,
  },
  {
    avatar: "/avatars/yuna-kim.jpg",
    colorName: "Yuna Kim",
    category: "Dining Out",
    date: "2024-07-10T12:30:13Z",
    amount: -27.5,
    recurring: false,
  },
  {
    avatar: "/avatars/sofia-peterson.jpg",
    colorName: "Sofia Peterson",
    category: "Transportation",
    date: "2024-07-09T08:55:27Z",
    amount: -12.5,
    recurring: false,
  },
  {
    avatar: "/avatars/mason-martinez.jpg",
    colorName: "Mason Martinez",
    category: "Lifestyle",
    date: "2024-07-08T15:20:41Z",
    amount: -65.0,
    recurring: false,
  },
  {
    avatar: "/avatars/sebastian-cook.jpg",
    colorName: "Sebastian Cook",
    category: "Transportation",
    date: "2024-07-07T11:45:55Z",
    amount: -20.0,
    recurring: false,
  },
  {
    avatar: "/avatars/william-harris.jpg",
    colorName: "William Harris",
    category: "General",
    date: "2024-07-06T17:10:09Z",
    amount: 20.0,
    recurring: false,
  },
  {
    avatar: "/avatars/elevate-education.jpg",
    colorName: "Elevate Education",
    category: "Education",
    date: "2024-07-05T11:15:22Z",
    amount: -50.0,
    recurring: true,
  },
  {
    avatar: "/avatars/serenity-spa-and-wellness.jpg",
    colorName: "Serenity Spa & Wellness",
    category: "Personal Care",
    date: "2024-07-03T14:00:37Z",
    amount: -30.0,
    recurring: true,
  },
  {
    avatar: "/avatars/spark-electric-solutions.jpg",
    colorName: "Spark Electric Solutions",
    category: "Bills",
    date: "2024-07-02T09:25:51Z",
    amount: -100.0,
    recurring: true,
  },
  {
    avatar: "/avatars/swift-ride-share.jpg",
    colorName: "Swift Ride Share",
    category: "Transportation",
    date: "2024-07-02T19:50:05Z",
    amount: -16.5,
    recurring: false,
  },
]

export const pots = [
  { colorName: "Savings", target: 2000.0, total: 159.0, theme: "#277C78" },
  {
    colorName: "Concert Ticket",
    target: 150.0,
    total: 110.0,
    theme: "#626070",
  },
  { colorName: "Gift", target: 150.0, total: 110.0, theme: "#82C9D7" },
  { colorName: "New Laptop", target: 1000.0, total: 10.0, theme: "#F2CDAC" },
  { colorName: "Holiday", target: 1440.0, total: 531.0, theme: "#826CB0" },
]

export const budgets = [
  { category: "Entertainment", maximum: 50.0, theme: "#277C78" },
  { category: "Bills", maximum: 750.0, theme: "#82C9D7" },
  { category: "Dining Out", maximum: 75.0, theme: "#F2CDAC" },
  { category: "Personal Care", maximum: 100.0, theme: "#626070" },
]

export const categories = [
  "General",
  "Dining Out",
  "Groceries",
  "Entertainment",
  "Transportation",
  "Lifestyle",
  "Personal Care",
  "Education",
  "Bills",
  "Shopping",
]

export const sortByArray: SortBy[] = [
  "Latest",
  "Oldest",
  "A to Z",
  "Z to A",
  "Highest",
  "Lowest",
]

export const colorPalette: ColorPaletteObj[] = [
  { id: 1, colorName: "Intense Beige", colorHex: "#98908B" },
  { id: 2, colorName: "Soft Beige", colorHex: "#F8F4F0" },
  { id: 3, colorName: "Deep Grey", colorHex: "#201F24" },
  { id: 4, colorName: "Neutral Grey", colorHex: "#696868" },
  { id: 5, colorName: "Light Grey", colorHex: "#B3B3B3" },
  { id: 6, colorName: "Soft Grey", colorHex: "#F2F2F2" },
  { id: 7, colorName: "Emerald Green", colorHex: "#277C78" },
  { id: 8, colorName: "Warm Yellow", colorHex: "#F2CDAC" },
  { id: 9, colorName: "Sky Cyan", colorHex: "#82C9D7" },
  { id: 10, colorName: "Navy Blue", colorHex: "#626070" },
  { id: 11, colorName: "Crimson Red", colorHex: "#C94736" },
  { id: 12, colorName: "Royal Purple", colorHex: "#826CB0" },
  { id: 13, colorName: "Lavender Mist", colorHex: "#AF81BA" },
  { id: 14, colorName: "Ocean Turquoise", colorHex: "#597C7C" },
  { id: 15, colorName: "Earthy Brown", colorHex: "#93674F" },
  { id: 16, colorName: "Magenta Rose", colorHex: "#934F6F" },
  { id: 17, colorName: "Ocean Blue", colorHex: "#3F82B2" },
  { id: 18, colorName: "Steel Navy-Grey", colorHex: "#97A0AC" },
  { id: 19, colorName: "Army Green", colorHex: "#7F9161" },
  { id: 20, colorName: "Golden Glow", colorHex: "#CAB361" },
  { id: 21, colorName: "Burnt Orange", colorHex: "#BE6C49" },
  { id: 22, colorName: "Pure White", colorHex: "#FFFFFF" },
]
