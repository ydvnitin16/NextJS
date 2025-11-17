import { revalidatePath } from 'next/cache';

export async function GET(request, { params }) {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    //   console.log("API HIT at:", Date.now());
    //     revalidatePath('/')
    return Response.json({ data, date: Date.now() });
}
