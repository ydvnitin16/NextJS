import React from 'react';
import { wonders } from '../data.js';

const Photo = async ({ params }) => {
    const { id } = await params;
    const wonder = wonders.find((w) => w.id === Number(id));

    return (
        <div className="flex justify-center items-center">
            <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 m-4">
                <img
                    className="w-full h-auto"
                    src={wonder.image}
                    alt={wonder.name}
                />
                <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                        {wonder.name}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-base">
                        {wonder.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Photo;
