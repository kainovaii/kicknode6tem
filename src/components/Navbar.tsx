export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
                <span className="font-bold tracking-wider uppercase text-sm block leading-none">
                Kicknode Sound System
                </span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#visualiseur" className="hover:text-white transition-colors">
                Visualiseur 3D
            </a>
            <a href="#architecture" className="hover:text-white transition-colors">
                Façade & Enceintes
            </a>
            <a href="#dsp" className="hover:text-white transition-colors">
                Filtrage DSP 204
            </a>
            </div>
        </div>
    </nav> 
  );
}