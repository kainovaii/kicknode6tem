import React from 'react';
import { Sliders } from 'lucide-react';

const CROSSOVER_BANDS = [
  {
    way: 'Voie 1 — Sub (Infra)',
    range: '35 Hz – 86 Hz',
    slope: 'Linkwitz-Riley 24 dB/oct',
    cabinet: 'Achat 118 A',
    driver: 'Transducteurs: RCF LF18X401',
    color: 'border-violet-500/40 bg-violet-500/10 text-violet-300',
  },
  {
    way: 'Voie 2 — Kick (Bass)',
    range: '86 Hz – 140 Hz',
    slope: 'Linkwitz-Riley 24 dB/oct',
    cabinet: 'Achat 115 Sub A',
    driver: 'Transducteurs: B&C 15NDL88 (8 Ω)',
    color: 'border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-300',
  },
  {
    way: 'Voie 3 — Top (Mid / High)',
    range: '140 Hz – 20 kHz',
    slope: 'Linkwitz-Riley 24 dB/oct',
    cabinet: 'Achat 112 MA MKII',
    driver: 'Transducteurs: B&C 12NDL76 + DE 250',
    color: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300',
  },
];

export default function DSP() {
  return (
    <section id="dsp" className="py-20 px-6 border-b border-zinc-900 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
              Traitement du Signal & Acoustique
            </span>
            <h2 className="text-3xl font-bold mt-1">Filtrage Actif DSP 204 & Calibrage</h2>
            <p className="text-sm text-zinc-400 mt-2">
              Chaque bande de fréquence est découpée numériquement avec des pentes raides
              Linkwitz-Riley 48 dB/octave et alignée en phase au micro de mesure Superlux ECM999.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CROSSOVER_BANDS.map((band, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-lg border text-xs font-semibold ${band.color}`}
                  >
                    {band.range}
                  </span>
                  <h3 className="text-xl font-bold">{band.way}</h3>
                  <p className="text-xs text-zinc-400 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-violet-400" />
                    <span>Filtre : {band.slope}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 space-y-1.5 text-sm">
                  <div className="text-zinc-200 font-medium">{band.cabinet}</div>
                  <div className="text-xs text-violet-400 font-medium">{band.driver}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}