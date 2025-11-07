// Sequential loading
// import { Suspense } from 'react';

// const getTodos = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     return await res.json();
// };

// const getSingleTodo = async (id) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//     return await res.json();
// };

// export default async function Page() {
//     await new Promise((r) => getTodos(r, 3000));

//     // Get artist information
//     const todos = await getArtist();

//     return (
//         <>
//             <Suspense fallback={<div>Loading...</div>}>
//                 <h1>{todos[0].title}</h1>
//             </Suspense>

//             {/* Show fallback UI while the Playlists component is loading */}
//             <Suspense fallback={<div>Loading...</div>}>
//                 {/* Pass the artist ID to the Playlists component */}
//                 <Todo todoId={3} />
//             </Suspense>
//         </>
//     );
// }

// async function Todo({ todoId }) {
//       await new Promise((r) => setTimeout(r, 3000))

//     // Use the artist ID to fetch playlists
//     const todo = await getSingleTodo(todoId);

//     return (
//         <ul>
//             <li>{todo.title}</li>
//         </ul>
//     );
// }

// export default async function Page() {
 
//   // Initiate requests
//   const todos = getTodos()
//   const todo = getSingleTodo(3)
 
//   const [res1, res2] = await Promise.all([todos, todo])
 
//   return (
//     <>
//       <h1>{res1[0].title}</h1>
//       <h1>{res2.title}</h1>
//     </>
//   )
// }


"use client";
import { addUser } from "./actions";

export default function HomePage() {
  async function handleAdd() {
    await addUser({ name: "Nitin", email: "nitin@example.com" });
    alert("User added successfully!");
  }

  return (
    <main style={{ padding: 20 }}>
      <button onClick={handleAdd}>Add User</button>
    </main>
  );
}