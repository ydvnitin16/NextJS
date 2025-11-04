'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useSnippets } from '@/contexts/snippets';
import React, { useState } from 'react';

const SnippetForm = () => {
    const { addSnippet } = useSnippets();
    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');

    return (
        <form className="">
            <Card className={'w-full max-w-sm mx-auto'}>
                <CardContent className={'grid gap-y-4'}>
                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label>Title</Label>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type={'text'}
                            placeholder="Title"
                        />
                    </div>
                    <div className="grid w-full gap-3">
                        <Label htmlFor="message">Your message</Label>
                        <Textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="Type your message here."
                            id="message"
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        onClick={() => {
                            addSnippet(title, code)
                            setTitle('');
                            setCode('');
                        }}
                        className={'w-full'}
                    >
                        Create
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
};

export default SnippetForm;
