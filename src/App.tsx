import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Viewport from './components/Viewport';
import DSP from './components/DSP';
import Speakers from './components/Speakers';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <Navbar />
      <Hero />
      <Viewport />
      <DSP />
      <Speakers />
      <footer className="mt-auto border-t border-zinc-900 py-8 px-6 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Kicknode Sound System — Tous droits réservés.</p>
      </footer>
    </div>
  );
}
