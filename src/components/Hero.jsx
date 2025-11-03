import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full" style={{ height: '70vh' }}>
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability - does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent opacity-90" />

      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Welcome back, ready to vibe?
            </h1>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              Your universe of sound. Dive into mood-based mixes, trending tracks, and curated playlists hand-picked for you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#discover"
                className="inline-flex items-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              >
                Discover Now
              </a>
              <a
                href="#library"
                className="inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70"
              >
                Go to Library
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
