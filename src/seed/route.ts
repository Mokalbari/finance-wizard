import bcrypt from "bcrypt"
import { db } from "@vercel/postgres"
import { transactions, pots, budgets } from "@/src/lib/placeholder-data"

const client = await db.connect()

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
  await client.sql`DROP TABLE IF EXISTS users CASCADE`
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      firstname VARCHAR(255),
      lastname VARCHAR(255),
      password TEXT NOT NULL,
      avatar TEXT,
      current DECIMAL,
      income DECIMAL,
      expenses DECIMAL
    );
  `

  const hashedPassword = await bcrypt.hash("yourPasswordHere", 10)

  const insertedUser = await client.sql`
    INSERT INTO users (email, firstname, lastname, password, avatar, current, income, expenses)
    VALUES ('test@example.com', 'John', 'Doe', ${hashedPassword}, './assets/images/avatars/john-doe.jpg', 4836.00, 3814.25, 1700.50)
    ON CONFLICT (id) DO NOTHING;
  `

  return insertedUser
}

async function seedBudgets() {
  await client.sql`DROP TABLE IF EXISTS budgets CASCADE`
  await client.sql`
    CREATE TABLE IF NOT EXISTS budgets (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      category VARCHAR(255),
      maximum DECIMAL,
      theme VARCHAR(255),
      user_id UUID REFERENCES users(id)
    );
  `

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
  await client.sql`DROP TABLE IF EXISTS pots CASCADE`
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

  const insertedPots = await Promise.all(
    pots.map(
      pot => client.sql`
      INSERT INTO pots (name, target, total, theme, user_id)
      VALUES (${pot.colorName}, ${pot.target}, ${pot.total}, ${pot.theme}, (SELECT id FROM users LIMIT 1))
      ON CONFLICT (id) DO NOTHING;
    `,
    ),
  )

  return insertedPots
}

async function seedTransactions() {
  await client.sql`DROP TABLE IF EXISTS transactions CASCADE`
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

  const insertedTransactions = await Promise.all(
    transactions.map(
      transaction => client.sql`
      INSERT INTO transactions (name, avatar, category, date, amount, recurring, user_id)
      VALUES (${transaction.colorName}, ${transaction.avatar}, ${transaction.category}, ${transaction.date}, ${transaction.amount}, ${transaction.recurring}, (SELECT id FROM users LIMIT 1))
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
