import { useState, Suspense } from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import SoundSystem3D from './SoundSystem3D';
import { Layers } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    badge: 'Étape 1',
    title: 'Configuration Actuelle',
    subtitle: 'Stack Mono 3 Voies Actif',
    specs: [
      '1x Achat 118 A (Subwoofer Folded Horn)',
      '1x Achat 115 Sub A (Kick Bin)',
      '1x Achat 112 MA MKII (Top)',
    ],
  },
  {
    id: 2,
    badge: 'Étape 2',
    title: 'Extension Intermédiaire',
    subtitle: 'Doublement de l’infra-grave',
    specs: [
      '2x Achat 118 A (Subwoofers)',
      '1x Achat 115 Sub A (Kick Bin)',
      '1x Achat 112 MA MKII (Top)',
    ],
  },
  {
    id: 3,
    badge: 'Étape 3',
    title: 'Façade Complète',
    subtitle: 'Full Stack Custom RCF & B&C',
    specs: [
      '4x Achat 118 A (chargés RCF LF18X401)',
      '2x Achat 115 Sub A (chargés B&C 15NDL88)',
      '2x Achat 112 MA MKII (chargés B&C 12NDL76 + DE 250)',
    ],
  },
];

export default function Viewport() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formSent, setFormSent] = useState<boolean>(false);
  const activeStep = STEPS.find((s) => s.id === currentStep) || STEPS[0];
  
  return (
    <section id="visualiseur" className="py-20 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold mt-1">Les différentes configurations du système</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* Viewport 3D */}
            <div className="lg:col-span-8 relative h-[520px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 shadow-2xl">
              <Canvas shadows camera={{ position: [2.5, 1.4, 4.5], fov: 30 }}>
                <color attach="background" args={['#1B112D']} />
                <ambientLight intensity={1.5} />
                <directionalLight position={[0, 2, 5]} intensity={3.0} />
                <directionalLight position={[4, 4, 4]} intensity={2.0} />
                <directionalLight position={[-4, 4, 4]} intensity={2.0} />

                <Suspense fallback={null}>
                  <Stage environment="city" intensity={0.6} adjustCamera={false}>
                    <SoundSystem3D currentStep={currentStep} />
                  </Stage>
                </Suspense>
                <OrbitControls
                  makeDefault
                  minPolarAngle={0}
                  maxPolarAngle={Math.PI / 2 - 0.05}
                  enableZoom={false}
                  enablePan={false}
                  /* enableRotate={false} */
                />
              </Canvas>

              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-zinc-950/80 backdrop-blur border border-zinc-800 text-xs text-zinc-300 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-violet-400" />
                <span>{activeStep.title}</span>
              </div>
            </div>

            {/* Panneau de contrôle des étapes */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                {STEPS.map((step) => {
                  const isSelected = currentStep === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setCurrentStep(step.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-violet-600/15 border-violet-500 shadow-lg shadow-violet-600/10'
                          : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            isSelected
                              ? 'bg-violet-600 text-white'
                              : 'bg-zinc-800 text-zinc-400'
                          }`}
                        >
                          {step.badge}
                        </span>
                        <span className="text-xs text-zinc-400">{step.subtitle}</span>
                      </div>
                      <div className="font-bold text-base text-white mt-2">{step.title}</div>
                      <ul className="mt-2 space-y-1">
                        {step.specs.map((spec, idx) => (
                          <li key={idx} className="text-xs text-zinc-400 flex items-start gap-1.5">
                            <span className="text-violet-400 mt-0.5">•</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
    </section>
  );
}