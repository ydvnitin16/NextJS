// app/SlowPosts.jsx
export default async function SlowPosts() {
  await new Promise((r) => setTimeout(r, 3000));
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  throw new Error("sorry")
  const posts = await res.json();
  return (
    <ul>
      {posts.slice(0, 5).map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}
