'use server';
import { revalidatePath } from 'next/cache';
import React from 'react';

const revalidate = () => {
    revalidatePath('/');
};

export default revalidate;
