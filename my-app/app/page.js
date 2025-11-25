import Image from 'next/image';
import React from 'react';

export const metadata = {
    title: 'Home',
    description: 'This is the home page'
}
const Home = () => {

    const images = [];

    return (
        <div className="grid sm:grid-cols-2 gap-3 lg:grid-cols-3">
            {images?.map((img, idx) => (
                <div className="relative w-full h-[400px]">
                    <Image
                        placeholder="empty"
                        key={idx}
                        className="object-cover"
                        src={img}
                        alt="Next.js logo"
                        fill //use this for the responsive images // and this is important to wrap the image component in a div tag
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
