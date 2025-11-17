import { revalidatePath } from "next/cache";

export async function GET() {
  console.log("API HIT at:", Date.now());
    revalidatePath('/')
  return Response.json({ time: Date.now() });
}
