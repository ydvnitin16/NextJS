import React from 'react';

const p = async () => {
    await new Promise((r) => setTimeout(r, 2000));
    return <div>p</div>;
};

export default p;
