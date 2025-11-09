'use client';
import { notFound } from 'next/navigation';
import React, { useActionState } from 'react';
import { throwFunction } from './action';

const page = () => {
    const [state, action, isPending] = useActionState(throwFunction, false);
    return (
        <>
            <div>{isPending && 'Pending'}</div>
            <div>{state && state}</div>
            <form action={action}>
            <button>Call</button></form>
        </>
    );
};

export default page;
