export default function Speakers() {
  return (
    <section id="architecture" className="py-20 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
              Technical Details
            </span>
            <h2 className="text-3xl font-bold mt-1">Front-of-House Composition</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="text-xs font-mono text-zinc-500">FOLDED HORN SUBWOOFER</div>
              <h3 className="text-lg font-bold">Achat 118 A</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Folded horn cabinet (no front grille) delivering high efficiency in the
                infra-low range. Prepared to house
                the 18" neodymium/ferrite RCF LF18X401 driver.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="text-xs font-mono text-zinc-500">15-INCH KICK BIN</div>
              <h3 className="text-lg font-bold">Achat 115 Sub A</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Dedicated to punchy low-mid / kick reproduction between 85 Hz and 140 Hz.
                Fitted with the B&C 15NDL88 driver (8 Ohms) for increased dynamics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="text-xs font-mono text-zinc-500">12" + 1" TOP CABINET</div>
              <h3 className="text-lg font-bold">Achat 112 MA MKII</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Mid-high coverage above 140 Hz. Features a B&C 12NDL76 woofer
                paired with a B&C DE 250 compression driver for surgical clarity.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}