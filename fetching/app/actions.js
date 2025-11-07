"use server";
import clientPromise from "@/lib/mongodb";

export async function addUser(user) {
  try {
    const client = await clientPromise;
    const db = client.db("myapp");       // your database name
    const users = db.collection("users"); // your collection
    await users.insertOne(user);
  } catch (err) {
    console.error("Error adding user:", err);
  }
}
