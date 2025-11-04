'use client';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useSnippets } from '@/contexts/snippets';
import { Input } from '@/components/ui/input';

const Page = () => {
    const { id } = useParams();
    let { snippets, updateSnippet } = useSnippets();
    snippets = snippets?.find((s) => String(s.id) === id);
    const [snippet, setSnippet] = useState(snippets);
    return (
        <Card className={'w-full max-w-sm mx-auto'}>
            <CardHeader>
                <Input
                    value={snippet.title}
                    onChange={(e) =>
                        setSnippet({ ...snippet, title: e.target.value })
                    }
                />
                <CardAction>
                    <Button onClick={() => updateSnippet(snippet)}>Save</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <Textarea
                    value={snippet.code}
                    onChange={(e) =>
                        setSnippet({ ...snippet, code: e.target.value })
                    }
                    placeholder="Type your message here."
                    id="message"
                />
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    );
};

export default Page;
