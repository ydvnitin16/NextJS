'use client';
import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import { wonders } from '../../data.js';

const PhotoModal = ({ params }) => {
    const { id } = use(params);
    const router = useRouter();
    const wonder = wonders.find((w) => w.id === Number(id));

    return (
        <div
            onClick={() => router.back()}
            className="h-screen w-full scroll-smooth absolute bg-black/20 backdrop-blur-sm flex justify-center items-center"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 m-4"
            >
                <img
                    className="w-full h-auto"
                    src={wonder.image}
                    alt={wonder.name}
                />
                <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                        {wonder.name} Modal
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-base">
                        {wonder.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PhotoModal;
