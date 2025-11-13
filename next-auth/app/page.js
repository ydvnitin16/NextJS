'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
    const { data: session, status } = useSession();

    if (status === 'loading') return <p>Loading...</p>;

    if (!session)
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <p>Not signed in</p>
                <button
                    onClick={() => signIn('github')}
                    className="p-2 bg-black text-white rounded"
                >
                    Sign in with GitHub
                </button>
                <button
                    onClick={() => signIn('google')}
                    className="p-2 bg-black text-white rounded"
                >
                    Sign in with Google
                </button>
            </div>
        );

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p>Signed in as {session.user.email}</p>
            <img
                src={session.user.image}
                alt=""
                className="w-16 h-16 rounded-full mt-2"
            />
            <button
                onClick={() => signOut()}
                className="mt-4 p-2 bg-gray-800 text-white rounded"
            >
                Sign out
            </button>
        </div>
    );
}
