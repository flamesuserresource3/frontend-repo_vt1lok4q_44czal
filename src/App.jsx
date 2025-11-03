import Header from './components/Header';
import Hero from './components/Hero';
import PlaylistSection from './components/PlaylistSection';
import PlaybackBar from './components/PlaybackBar';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      <main>
        <Hero />
        <PlaylistSection id="discover" title="Trending now" description="What the world is vibing to." />
        <PlaylistSection id="moods" title="Mood-based mixes" description="Soundtracks for every feeling." />
        <section id="library" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl sm:text-2xl font-semibold">Your library</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Recently played and saved music live here.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-28 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800" />
            ))}
          </div>
        </section>
      </main>
      <PlaybackBar />
    </div>
  );
}
