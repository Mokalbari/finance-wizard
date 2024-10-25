import { Generated, Insertable, Selectable, Updateable } from "kysely"

export interface Database {
  users: UserTable
  budgets: BudgetTable
  pots: PotTable
  transactions: TransactionTable
}

export interface BudgetTable {
  id: Generated<string>
  category: string
  maximum: string
  theme: string
  user_id: string
}

export interface PotTable {
  id: Generated<string>
  name: string
  target: string
  total: string
  theme: string
  user_id: string
}

export interface TransactionTable {
  id: Generated<string>
  name: string
  avatar: string
  category: string
  date: Date
  amount: string
  recurring: boolean
  user_id: string
}

export interface UserTable {
  id: Generated<string>
  email: string
  firstname: string
  lastname: string
  password: string
  avatar: string
  current: string
  income: string
  expenses: string
}

export type User = Selectable<UserTable>
export type NewUser = Insertable<UserTable>
export type UpdateUser = Updateable<UserTable>

export type Pot = Selectable<PotTable>
export type NewPot = Insertable<PotTable>
export type UpdatePot = Updateable<PotTable>

export type Budget = Selectable<BudgetTable>
export type NewBudget = Insertable<BudgetTable>
export type UpdateBudget = Updateable<BudgetTable>

export type Transaction = Selectable<TransactionTable>
export type NewTransaction = Insertable<TransactionTable>
export type UpdateTransaction = Updateable<TransactionTable>
