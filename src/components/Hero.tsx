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
              Decouvre le projet 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                {' '} KickNode SoundSystem
              </span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Configuration 100 % active calibrée au millimètre via processeur DSP 204 et mesures Acoustiques REW. 
              Explorez les différentes configurations de notre façade, de la plus compacte au mur, complet équipé en haut-parleurs RCF et B&C.
            </p>

          </div>

          {/* Key Metrics Card */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-2">
              <Volume2 className="w-6 h-6 text-violet-400" />
              <div className="text-2xl font-bold">3 Voies</div>
              <p className="text-xs text-zinc-400">
                Sub Folded Horn, Kick Bin 15" & Top 12" en filtrage actif mono
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-2">
              <Cpu className="w-6 h-6 text-fuchsia-400" />
              <div className="text-2xl font-bold">DSP 204</div>
              <p className="text-xs text-zinc-400">
                Pentes Linkwitz-Riley 48 dB/oct et alignement de phase REW
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-2">
              <Zap className="w-6 h-6 text-amber-400" />
              <div className="text-2xl font-bold">PowerCON</div>
              <p className="text-xs text-zinc-400">
                Chaînage électrique Neutrik sécurisé sur chaque caisson actif
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-2">
              <Radio className="w-6 h-6 text-emerald-400" />
              <div className="text-2xl font-bold">RCF & B&C</div>
              <p className="text-xs text-zinc-400">
                Transducteurs haute tenue en puissance sur-mesure
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}