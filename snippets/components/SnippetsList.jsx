"use client"
import React from 'react';
import { useSnippets } from '@/contexts/snippets';
import { CardContent } from './ui/card';
import { Item, ItemActions, ItemContent, ItemTitle } from './ui/item';
import { Button } from './ui/button';
import Link from 'next/link';

const SnippetsList = () => {
    
    const snippets = useSnippets().snippets;
    console.log(useSnippets().snippets)
    return (
        <CardContent className={'grid gap-2'}>
            {snippets &&
                snippets.map((s, idx) => (
                    <Item key={s.id} variant="muted">
                        <ItemContent>
                            <ItemTitle>{s.title}</ItemTitle>
                        </ItemContent>
                        <ItemActions>
                            <Link href={`/snippet/${s.id}`}>
                                <Button>View</Button>
                            </Link>
                        </ItemActions>
                    </Item>
                ))}
        </CardContent>
    );
};

export default SnippetsList;
