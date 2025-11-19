import React from 'react';
import { wonders } from './data.js';
import Link from 'next/link.js';

const Photos = () => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
            {wonders.map((wonder) => (
                <Link key={wonder.id} href={`/photo-feed/${wonder.id}`}>
                    <img
                        className="border border-zinc-600 rounded-2xl"
                        src={wonder.image}
                    />
                </Link>
            ))}
        </div>
    );
};

export default Photos;
