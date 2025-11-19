import React from 'react';

const Home = async () => {
    const res = await fetch('http://localhost:3000/api');
    const data = await res.json();
    console.log(data);
    return <div>Home</div>;
};

export default Home;
