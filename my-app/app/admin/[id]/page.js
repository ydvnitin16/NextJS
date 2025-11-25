import React from 'react';

export async function generateMetadata({ params, searchParams }) {
    const id = (await params).id;

    return { title: `admin-${id}`, description: 'Admin specific page' };
}

const SpecificAdmin = () => {
    return <div>SpecificAdmin</div>;
};

export default SpecificAdmin;
