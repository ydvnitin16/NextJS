# 🧩 Prisma + MongoDB — Interaction Guide

This guide explains how to **interact with MongoDB** using **Prisma ORM**, including all the CRUD, filtering, and relation operations you’ll use in real-world full-stack apps (like Next.js).

---

## ⚡ Import Prisma Client

Create a single instance and import it where needed:

```js
import prisma from '@/lib/prisma';
```

## 📘 CRUD Operations

### 🟢 Read (Find)

-   Get all documents

```bash
const users = await prisma.user.findMany();
```

Get one by unique field

```bash
const user = await prisma.user.findUnique({
  where: { email: "john@example.com" },
});
```

Filter results

```bash
const adults = await prisma.user.findMany({
  where: {
    age: { gte: 18 },
    name: { contains: "Nitin", mode: "insensitive" },
  },
});
```

Select specific fields

```bash
const users = await prisma.user.findMany({
  select: { name: true, email: true },
});

```

Sort & paginate

```bash
const users = await prisma.user.findMany({
  orderBy: { createdAt: "desc" },
  take: 10, // limit
  skip: 5,  // skip for pagination
});
```

### 🟣 Create

Create one

```bash
const user = await prisma.user.create({
  data: {
    name: "Nitin",
    email: "nitin@example.com",
    age: 21,
  },
});
```

Create many

```bash
await prisma.user.createMany({
  data: [
    { name: "Alice", email: "a@example.com" },
    { name: "Bob", email: "b@example.com" },
  ],
});
```

🟡 Update
Update one

```bash
await prisma.user.update({
  where: { email: "nitin@example.com" },
  data: { age: 22 },
});
```

Update many

```bash
await prisma.user.updateMany({
  where: { age: { lt: 18 } },
  data: { status: "minor" },
});
```

🔴 Delete
Delete one

```bash
await prisma.user.delete({
  where: { email: "nitin@example.com" },
});
```

Delete many

```bash
await prisma.user.deleteMany({
  where: { age: { lt: 18 } },
});
```

## 🔗 Relations

Example schema:
``` bash
model User {
  id     String   @id @default(auto()) @map("_id") @db.ObjectId
  name   String
  posts  Post[]
}

model Post {
  id       String  @id @default(auto()) @map("_id") @db.ObjectId
  title    String
  content  String?
  author   User?   @relation(fields: [authorId], references: [id])
  authorId String? @db.ObjectId
}
```
Create with relation (connect)
``` bash
await prisma.post.create({
  data: {
    title: "My first post",
    author: {
      connect: { id: "6710a8df2d..." },
    },
  },
});
```
Create with new related data (nested create)
``` bash
await prisma.post.create({
  data: {
    title: "Nested Post",
    author: {
      create: { name: "New User" },
    },
  },
});
```
Fetch related data
``` bash
const user = await prisma.user.findUnique({
  where: { id: "6710a8df2d..." },
  include: { posts: true },
});
```
Fetch inverse relation
``` bash
const posts = await prisma.post.findMany({
  include: { author: true },
});
```

## 🧠 Advanced Queries
### Transactions

Execute multiple operations safely:
```bash
await prisma.$transaction([
  prisma.user.create({ data: { name: "A" } }),
  prisma.post.create({ data: { title: "B", authorId: "..." } }),
]);
```

If one fails → all rollback.

## Aggregations
```bash
const stats = await prisma.user.aggregate({
  _count: true,
  _avg: { age: true },
  _max: { age: true },
  _min: { age: true },
});
```
## Raw Queries

For MongoDB-native operations:
```bash
await prisma.$runCommandRaw({
  aggregate: "User",
  pipeline: [{ $match: { age: { $gte: 18 } } }],
});
```

## ✅ Best Practices

- Create one Prisma client instance only (avoid multiple connections).

- Wrap DB calls in try/catch blocks.

- Validate data before writing to DB.

- Use a “service layer” for Prisma queries to keep your routes clean.

- Use include or select to fetch only what you need.

## 📚 Example: Service Layer Pattern
```bash
// services/userService.js
import prisma from "@/lib/prisma";

export async function getAllUsers() {
  return await prisma.user.findMany();
}

export async function createUser(data) {
  return await prisma.user.create({ data });
}
```

#### Then in your route:
```bash
import { createUser, getAllUsers } from "@/services/userService";

export async function GET() {
  const users = await getAllUsers();
  return Response.json(users);
}
```

| Action      | Prisma Method                  | Example                                         |
| ----------- | ------------------------------ | ----------------------------------------------- |
| Read        | `findMany`, `findUnique`       | `await prisma.user.findMany()`                  |
| Create      | `create`, `createMany`         | `await prisma.user.create({ data })`            |
| Update      | `update`, `updateMany`         | `await prisma.user.update({ where, data })`     |
| Delete      | `delete`, `deleteMany`         | `await prisma.user.delete({ where })`           |
| Relations   | `include`, `connect`, `create` | `include: { posts: true }`                      |
| Aggregation | `aggregate`                    | `await prisma.user.aggregate({ _count: true })` |
