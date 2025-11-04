import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-zinc-950">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="http://localhost:3000"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <Image
                        className="dark:invert py-2"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={100}
                        height={20}
                        priority
                    />
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-zinc-950 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-zinc-950 dark:border-gray-700">
                            <Link href={'/admin'}>Admin</Link>
                            <Link href={'/marketing'}>marketing</Link>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={100}
                        height={20}
                        priority
                    />
                    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                            To get started, edit the page.js file.
                        </h1>
                        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            Looking for a starting point or more instructions?
                            Head over to{' '}
                            <a
                                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                className="font-medium text-zinc-950 dark:text-zinc-50"
                            >
                                Templates
                            </a>{' '}
                            or the{' '}
                            <a
                                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                className="font-medium text-zinc-950 dark:text-zinc-50"
                            >
                                Learning
                            </a>{' '}
                            center.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                        <a
                            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="dark:invert"
                                src="/vercel.svg"
                                alt="Vercel logomark"
                                width={16}
                                height={16}
                            />
                            Deploy Now
                        </a>
                        <a
                            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Documentation
                        </a>
                    </div>
                </main>
            </div>
        </>
    );
}
