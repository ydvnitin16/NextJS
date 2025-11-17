import { revalidateTag } from 'next/cache';
import React, { cache } from 'react';
import revalidate from './revalidateAction';

async function getPosts() {
    // const res = await fetch('http://localhost:3000/api/date', {next: {tags: ['date']}, cache: 'force-cache'});
    const res = await fetch('http://localhost:3000/api/1', {next: {tags: ['date']}, cache: 'force-cache'});
    // console.log('Fetching posts at:', new Date().toLocaleTimeString());

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

const Home = async () => {
    const posts = await getPosts();
    return (
        <main>
            <h1>Date: {JSON.stringify(posts)} </h1>
            <button className='border p-2 rounded-lg cursor-pointer hover:bg-zinc-800 border-zinc-600' onClick={revalidate}>Revalidate</button>
            {/* <p>Current time on server: {new Date().toLocaleTimeString()}</p> */}
            {/* <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </main>
    );
};

export default Home;
