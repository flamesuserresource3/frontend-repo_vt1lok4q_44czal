import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const samplePlaylists = [
  {
    title: 'Cosmic Chill',
    subtitle: 'Lofi • Dream Pop • Ambient',
    cover:
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Neon Drive',
    subtitle: 'Synthwave • Retro • Night Ride',
    cover:
      'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Focus Flow',
    subtitle: 'Deep Work • Instrumental',
    cover:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Mood Booster',
    subtitle: 'Pop • Feel Good • Energy',
    cover:
      'https://images.unsplash.com/photo-1535231540604-72e8f6f70a07?q=80&w=1200&auto=format&fit=crop',
  },
];

function Card({ item }) {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      className="group text-left rounded-xl overflow-hidden bg-white/60 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
      aria-label={`Open playlist ${item.title}`}
    >
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={item.cover}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100 leading-tight">
              {item.title}
            </h3>
            <p className="text-xs mt-1 text-zinc-500 dark:text-zinc-400">{item.subtitle}</p>
          </div>
          <Heart size={16} className="text-zinc-400 group-hover:text-fuchsia-500" />
        </div>
      </div>
    </motion.button>
  );
}

export default function PlaylistSection({ id = 'discover', title = 'Trending now', description = 'Hand-picked mixes just for you.' }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100">{title}</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{description}</p>
        </div>
        <a href="#" className="text-sm text-fuchsia-600 dark:text-fuchsia-400 hover:underline">See all</a>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {samplePlaylists.map((pl) => (
          <Card key={pl.title} item={pl} />
        ))}
      </div>
    </section>
  );
}
