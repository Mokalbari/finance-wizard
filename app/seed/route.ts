import bcrypt from "bcrypt"
import { db } from "@vercel/postgres"

const client = await db.connect()

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      firstname VARCHAR(255),
      lastname VARCHAR(255),
      password TEXT NOT NULL,
      avatar TEXT
    );
  `

  const hashedPassword = await bcrypt.hash("yourPasswordHere", 10)
  const insertedUser = await client.sql`
    INSERT INTO users (email, firstname, lastname, password, avatar)
    VALUES ('test@example.com', 'John', 'Doe', ${hashedPassword}, './assets/images/avatars/john-doe.jpg')
    ON CONFLICT (id) DO NOTHING;
  `

  return insertedUser
}

async function seedBudgets() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS budgets (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      category VARCHAR(255),
      maximum DECIMAL,
      theme VARCHAR(255),
      user_id UUID REFERENCES users(id)
    );
  `

  const budgets = [
    { category: "Entertainment", maximum: 50.0, theme: "#277C78" },
    { category: "Bills", maximum: 750.0, theme: "#82C9D7" },
    { category: "Dining Out", maximum: 75.0, theme: "#F2CDAC" },
    { category: "Personal Care", maximum: 100.0, theme: "#626070" },
  ]

  const insertedBudgets = await Promise.all(
    budgets.map(
      budget => client.sql`
      INSERT INTO budgets (category, maximum, theme, user_id)
      VALUES (${budget.category}, ${budget.maximum}, ${budget.theme}, (SELECT id FROM users LIMIT 1))
      ON CONFLICT (id) DO NOTHING;
    `,
    ),
  )

  return insertedBudgets
}

async function seedPots() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS pots (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255),
      target DECIMAL,
      total DECIMAL,
      theme VARCHAR(255),
      user_id UUID REFERENCES users(id)
    );
  `

  const pots = [
    { name: "Savings", target: 2000.0, total: 159.0, theme: "#277C78" },
    { name: "Concert Ticket", target: 150.0, total: 110.0, theme: "#626070" },
    { name: "Gift", target: 150.0, total: 110.0, theme: "#82C9D7" },
    { name: "New Laptop", target: 1000.0, total: 10.0, theme: "#F2CDAC" },
    { name: "Holiday", target: 1440.0, total: 531.0, theme: "#826CB0" },
  ]

  const insertedPots = await Promise.all(
    pots.map(
      pot => client.sql`
      INSERT INTO pots (name, target, total, theme, user_id)
      VALUES (${pot.name}, ${pot.target}, ${pot.total}, ${pot.theme}, (SELECT id FROM users LIMIT 1))
      ON CONFLICT (id) DO NOTHING;
    `,
    ),
  )

  return insertedPots
}

async function seedTransactions() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS transactions (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255),
      avatar TEXT,
      category VARCHAR(255),
      date TIMESTAMP,
      amount DECIMAL,
      recurring BOOLEAN,
      user_id UUID REFERENCES users(id)
    );
  `

  const transactions = [
    {
      name: "Emma Richardson",
      avatar: "./assets/images/avatars/emma-richardson.jpg",
      category: "General",
      date: "2024-08-19T14:23:11Z",
      amount: 75.5,
      recurring: false,
    },
    {
      name: "Savory Bites Bistro",
      avatar: "./assets/images/avatars/savory-bites-bistro.jpg",
      category: "Dining Out",
      date: "2024-08-19T20:23:11Z",
      amount: -55.5,
      recurring: false,
    },
    // Add all other transactions here
  ]

  const insertedTransactions = await Promise.all(
    transactions.map(
      transaction => client.sql`
      INSERT INTO transactions (name, avatar, category, date, amount, recurring, user_id)
      VALUES (${transaction.name}, ${transaction.avatar}, ${transaction.category}, ${transaction.date}, ${transaction.amount}, ${transaction.recurring}, (SELECT id FROM users LIMIT 1))
      ON CONFLICT (id) DO NOTHING;
    `,
    ),
  )

  return insertedTransactions
}

export async function GET() {
  try {
    await client.sql`BEGIN`
    await seedUsers()
    await seedBudgets()
    await seedPots()
    await seedTransactions()
    await client.sql`COMMIT`

    return Response.json({ message: "Database seeded successfully" })
  } catch (error) {
    await client.sql`ROLLBACK`
    return Response.json({ error }, { status: 500 })
  }
}
