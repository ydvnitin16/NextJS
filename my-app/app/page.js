import Image from 'next/image';
import React from 'react';

const Home = () => {
    const images = [];

    return (
        <div className="grid sm:grid-cols-2 gap-3 lg:grid-cols-3">
            {images?.map((img, idx) => (
                <div className="relative w-full h-[400px]">
                    <Image
                    placeholder='empty'
                        key={idx}
                        className="object-cover"
                        src={img}
                        alt="Next.js logo"
                        fill //use this for the responsive images
                        // height={200}
                        // width={100}
                        // sizes="100vh"
                        quality={100}
                        preload={false}
                    />
                </div>
            ))}
        </div>
    );
};

export default Home;
