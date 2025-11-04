import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import React from 'react';
import Link from 'next/link';
import SnippetsList from '@/components/SnippetsList';

const Home = () => {
    return (
        <Card className={'w-full max-w-sm mx-auto'}>
            <CardHeader>
                <CardTitle>Snippets</CardTitle>
                <CardDescription>
                    Click add to create new snippets
                </CardDescription>
                <CardAction>
                    <Link href={'/snippet/new'}>
                        <Button variant={'outline'}>New</Button>
                    </Link>
                </CardAction>
            </CardHeader>
            {/* This snippet list uses the hook so we have to make it client component, then import(inject) in the server component  */}
            <SnippetsList /> 
        </Card>
    );
};

export default Home;
