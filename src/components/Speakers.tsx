export default function Speakers() {
  return (
    <section id="architecture" className="py-20 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
              Détails Techniques
            </span>
            <h2 className="text-3xl font-bold mt-1">Composition de la Façade</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="text-xs font-mono text-zinc-500">SUBWOOFER FOLDED HORN</div>
              <h3 className="text-lg font-bold">Achat 118 A</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Caisson pavillonné replié (sans grille frontale) offrant un rendement élevé dans
                l’infra-grave. Préparé pour accueillir
                le haut-parleur néodyme/ferrite 18" RCF LF18X401.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="text-xs font-mono text-zinc-500">KICK BIN 15 POUCES</div>
              <h3 className="text-lg font-bold">Achat 115 Sub A</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Dédié à la restitution percutante du bas-médium / kick entre 85 Hz et 140 Hz.
                Avec le haut-parleur B&C 15NDL88 (8 Ohms) pour une dynamique accrue.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="text-xs font-mono text-zinc-500">ENCEINTE TOP 12" + 1"</div>
              <h3 className="text-lg font-bold">Achat 112 MA MKII</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Diffusion médium-aigu au-dessus de 140 Hz. Avec un woofer B&C 12NDL76
                couplé à une compression B&C DE 250 pour une clarté chirurgicale.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}