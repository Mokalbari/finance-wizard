interface DataEntry {
  id: number
  data: string
}

export const sortData: DataEntry[] = [
  { id: 1, data: "Latest" },
  { id: 2, data: "Oldest" },
  { id: 3, data: "A to Z" },
  { id: 4, data: "Z to A" },
  { id: 5, data: "Highest" },
  { id: 6, data: "Lowest" },
]

export const filterData: DataEntry[] = [
  { id: 1, data: "All Transactions" },
  { id: 2, data: "Entertainment" },
  { id: 3, data: "Bills" },
  { id: 4, data: "Groceries" },
  { id: 5, data: "Dining Out" },
  { id: 6, data: "Transportation" },
  { id: 7, data: "Personal Care" },
  { id: 8, data: "Education" },
  { id: 9, data: "Lifestyle" },
  { id: 10, data: "Shopping" },
  { id: 1, data: "General" },
]
