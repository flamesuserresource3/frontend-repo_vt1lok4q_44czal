import { useEffect, useState } from 'react';
import { Search, User, Settings, Sun, Moon, Music2 } from 'lucide-react';

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((d) => !d)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center justify-center rounded-full border border-zinc-300/40 dark:border-zinc-700/60 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 text-white grid place-items-center shadow">
            <Music2 size={20} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Nuvana Music</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Ready to vibe?</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input
              type="search"
              placeholder="Search artists, tracks, moods..."
              className="w-full rounded-full pl-10 pr-4 h-10 bg-zinc-100/80 dark:bg-zinc-800/70 border border-zinc-200/60 dark:border-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
              aria-label="Search Nuvana Music"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <button className="inline-flex items-center gap-2 h-10 px-3 rounded-full border border-zinc-300/50 dark:border-zinc-700/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" aria-label="Account">
            <User size={18} />
            <span className="hidden sm:inline">Sign in</span>
          </button>
          <button className="p-2 rounded-full border border-zinc-300/50 dark:border-zinc-700/60 hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="Settings">
            <Settings size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
