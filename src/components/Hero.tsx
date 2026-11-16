import {
  Zap,
  Volume2,
  Cpu,
  Radio,
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-900 py-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.16),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Discover the project
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                {' '} KickNode SoundSystem
              </span>
            </h1>

          </div>


        </div>
    </section>
  );
}