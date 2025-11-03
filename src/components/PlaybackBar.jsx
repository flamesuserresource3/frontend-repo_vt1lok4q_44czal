import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from 'lucide-react';

export default function PlaybackBar() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="sticky bottom-0 z-20 border-t border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 grid grid-cols-3 items-center gap-4">
        {/* Now Playing */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop"
            alt="Album art"
            className="h-14 w-14 rounded-md object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">Starlight Echoes</p>
            <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">Nova & The Comets</p>
          </div>
          <button className="ml-2 p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="Like">
            <Heart size={16} />
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Previous"
          >
            <SkipBack size={18} />
          </button>
          <button
            className="h-10 w-10 rounded-full grid place-items-center bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onClick={() => setIsPlaying((v) => !v)}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button
            className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Next"
          >
            <SkipForward size={18} />
          </button>
        </div>

        {/* Volume */}
        <div className="hidden sm:flex items-center justify-end gap-3">
          <Volume2 size={18} />
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="60"
            aria-label="Volume"
            className="w-32 accent-fuchsia-500"
          />
        </div>
      </div>
    </div>
  );
}
