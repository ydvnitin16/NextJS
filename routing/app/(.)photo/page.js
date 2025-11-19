'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Photo = () => {
    const router = useRouter()
    return (
        <div className='absolute h-screen w-full flex justify-center items-center'>
            <img
                className=""
                src={
                    'https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg'
                }
            />
            <button onClick={() => router.back()}>Open full</button>
        </div>
    );
};

export default Photo;
