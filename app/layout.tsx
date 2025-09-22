import './globals.css';
import type { ReactNode } from 'react';


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
<div className="mx-auto max-w-6xl px-4 py-8">
<header className="mb-8 flex items-center justify-between">
<a href="/" className="text-2xl font-semibold tracking-tight">OBC Video Toolkit</a>
<nav className="flex gap-6 text-sm text-zinc-300">
<a className="hover:text-[#afff2c]" href="/resources">Resources</a>
<a className="hover:text-[#afff2c]" href="/tutorials">Tutorials</a>
<a className="hover:text-[#afff2c]" href="/submit">Submit</a>
</nav>
</header>
{children}
<footer className="mt-16 border-t border-white/10 pt-6 text-xs text-zinc-400">
Built for the Online Business Club, curated for YouTube Automation.
</footer>
</div>
</body>
</html>
);
}
