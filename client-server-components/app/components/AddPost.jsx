// app/components/AddPost.jsx
'use client';
import { useState } from 'react';
import PostLists from './PostLists';

export default function AddPost() {
    const [title, setTitle] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Posting:', title);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="New post..."
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
}
