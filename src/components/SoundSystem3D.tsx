import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface SoundSystem3DProps {
  currentStep?: number;
}

export default function SoundSystem3D({ currentStep = 1 }: SoundSystem3DProps) {
  // Utilisation correcte du BASE_URL pour le chargement dynamique
  const glbPath = `${(import.meta as any).env.BASE_URL}step${currentStep}.glb`;

  const { scene } = useGLTF(glbPath);

  const { centeredScene, offset } = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const fixMaterial = (mat: THREE.Material) => {
          if (mat instanceof THREE.MeshStandardMaterial) {
            // Tes matériaux Blender sont exportés en noir pur [0,0,0], on les passe en gris anthracite
            if (mat.color.r < 0.08 && mat.color.g < 0.08 && mat.color.b < 0.08) {
              mat.color.set('#000000');
            }
            mat.roughness = 0.55;
            mat.metalness = 0.15;
            mat.needsUpdate = true;
          }
        };

        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(fixMaterial);
        } else if (mesh.material) {
          fixMaterial(mesh.material);
        }
      }
    });

    // Centrage horizontal automatique (X et Z) et pose de la base au sol (Y = 0)
    const box = new THREE.Box3().setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());

    return {
      centeredScene: clone,
      offset: [-center.x, -box.min.y, -center.z] as [number, number, number],
    };
  }, [scene]);

  return (
    <group position={offset}>
      <primitive object={centeredScene} scale={1} />
    </group>
  );
}

// Précharge les 3 modèles avec des backticks (``) pour que le BASE_URL soit bien interprété
useGLTF.preload(`${(import.meta as any).env.BASE_URL}step1.glb`);
useGLTF.preload(`${(import.meta as any).env.BASE_URL}step2.glb`);
useGLTF.preload(`${(import.meta as any).env.BASE_URL}step3.glb`); 