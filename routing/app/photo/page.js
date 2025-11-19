'use client';
import Image from 'next/image';
import React from 'react';

const Photo = () => {
    return (
            <img
                className="h-screen w-full"
                src={
                    'https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg'
                }
            />
    );
};

export default Photo;
