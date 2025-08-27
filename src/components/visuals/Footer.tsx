// src/components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full border-t border-zinc-800 bg-zinc-900/90 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
                <p className="text-sm text-zinc-400">
                    © {new Date().getFullYear()} David Carmona Arrabal
                </p>
                <div className="flex gap-4 text-zinc-400">
                    <Link
                        href="https://github.com/davidcarmonaarrabal"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.09-.75.09-.75 1.22.09 1.87 1.26 1.87 1.26 1.08 1.85 2.84 1.32 3.54 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.4 1.25-3.24-.13-.31-.54-1.55.12-3.23 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.01 2.05.14 3.01.41 2.3-1.55 3.31-1.23 3.31-1.23.66 1.68.25 2.92.12 3.23.78.84 1.25 1.92 1.25 3.24 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22 0 1.61-.02 2.91-.02 3.3 0 .32.22.68.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </Link>

                    <Link
                        href="https://x.com/Silversoul_07"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.24 4.24 0 001.85-2.35c-.83.5-1.75.85-2.72 1.04a4.22 4.22 0 00-7.19 3.85A11.95 11.95 0 013 4.8a4.22 4.22 0 001.3 5.63c-.68-.02-1.32-.21-1.87-.52v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.15-1.14.15-.28 0-.55-.03-.81-.08a4.23 4.23 0 003.95 2.93A8.48 8.48 0 012 19.54a11.93 11.93 0 006.48 1.9c7.78 0 12.03-6.45 12.03-12.03l-.01-.55A8.4 8.4 0 0022.46 6z" />
                        </svg>
                    </Link>

                    <Link 
                        href="https://www.instagram.com/by.jiangtao/"
                        target="_blank"
                        className="hover:text-white transition">
                        <p>Design by: @by.jiangtao</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
