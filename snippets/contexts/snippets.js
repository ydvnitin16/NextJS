// app/context/SnippetContext.jsx
'use client';
import { createContext, useState, useContext, useEffect } from 'react';

const SnippetContext = createContext();

export function SnippetProvider({ children }) {
    const [snippets, setSnippets] = useState(() =>
        JSON.parse(localStorage.getItem('snippets')) || null
    );

    useEffect(() => {
        localStorage.setItem('snippets', JSON.stringify(snippets));
    }, [snippets]);

    const addSnippet = (title, code) => {
        setSnippets((prev) => [...prev, { id: Date.now(), title, code }]);
    };

    const removeSnippet = (id) => {
        setSnippets((prev) => prev.filter((snippet) => snippet.id !== id));
    };

    const updateSnippet = ({id, title, code}) => {
        setSnippets((prev) =>
            prev.map((s) => (s.id === id ? { ...s, title, code } : s))
        );
    };

    return (
        <SnippetContext.Provider
            value={{ snippets, addSnippet, removeSnippet, updateSnippet }}
        >
            {children}
        </SnippetContext.Provider>
    );
}

export function useSnippets() {
    return useContext(SnippetContext);
}
