'use client';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from '@/components/ui/item';
import { useSnippets } from '@/contexts/snippets';
import Link from 'next/link';
import React from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
    const params = useParams();
    let { snippets, removeSnippet } = useSnippets();
    if (snippets) {
        snippets = snippets.find((s) => String(s.id) === params?.id);
    }
    return (
        <>
            <Card className={'w-full max-w-sm mx-auto'}>
                {snippets ? (
                    <>
                        <CardHeader>
                            <CardTitle>Edit Snippet</CardTitle>
                            <CardAction className={'flex gap-3'}>
                                <Link href={`/snippet/${snippets?.id}/edit`}>
                                    <Button>Edit</Button>
                                </Link>
                                <Button onClick={()=>removeSnippet(snippets.id)}>Delete</Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent>
                            <Item>
                                <ItemContent>
                                    <ItemTitle>{snippets?.title}</ItemTitle>
                                    <ItemDescription>
                                        {snippets?.code}
                                    </ItemDescription>
                                </ItemContent>
                            </Item>
                        </CardContent>
                    </>
                ) : (
                    <CardDescription>Not Found Error</CardDescription>
                )}
            </Card>
        </>
    );
};

export default Page;
