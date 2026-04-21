'use client';
import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Torus, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Floating human-like form using distorted spheres
function AvatarForm({ mouseX, mouseY }: { mouseX: React.MutableRefObject<number>; mouseY: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    // Slow Y rotation
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.08 + mouseX.current * 0.2;
    groupRef.current.rotation.x = mouseY.current * 0.12;
    // Float effect
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.08;
    // Head bob
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.7) * 0.05;
      headRef.current.rotation.x = Math.sin(t * 0.4) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh ref={headRef} position={[0, 1.15, 0]}>
        <sphereGeometry args={[0.4, 64, 64]} />
        <MeshDistortMaterial
          color="#5B8AF0"
          emissive="#2040a0"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
          distort={0.12}
          speed={1.5}
        />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 0.72, 0]}>
        <cylinderGeometry args={[0.14, 0.18, 0.22, 32]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Body / torso */}
      <mesh ref={bodyRef} position={[0, 0.0, 0]}>
        <capsuleGeometry args={[0.38, 0.85, 32, 32]} />
        <MeshDistortMaterial
          color="#0D0D14"
          emissive="#1a2050"
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.15}
          distort={0.06}
          speed={1}
        />
      </mesh>

      {/* Shoulder left */}
      <mesh position={[-0.58, 0.42, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#0D0D14" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Arm left */}
      <mesh position={[-0.7, -0.05, 0]} rotation={[0.1, 0, -0.3]}>
        <capsuleGeometry args={[0.13, 0.7, 16, 16]} />
        <meshStandardMaterial color="#0D0D14" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Shoulder right */}
      <mesh position={[0.58, 0.42, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#0D0D14" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Arm right */}
      <mesh position={[0.7, -0.05, 0]} rotation={[-0.1, 0, 0.3]}>
        <capsuleGeometry args={[0.13, 0.7, 16, 16]} />
        <meshStandardMaterial color="#0D0D14" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Glowing chest core */}
      <mesh position={[0, 0.2, 0.35]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial
          color="#5B8AF0"
          emissive="#5B8AF0"
          emissiveIntensity={2}
          metalness={1}
          roughness={0}
        />
      </mesh>
    </group>
  );
}

// Holographic orbit ring
function OrbitRing({ mouseX, mouseY }: { mouseX: React.MutableRefObject<number>; mouseY: React.MutableRefObject<number> }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    const t = state.clock.elapsedTime;
    ringRef.current.rotation.z = t * 0.4;
    ringRef.current.rotation.x = Math.PI / 3 + mouseY.current * 0.15;
  });

  return (
    <mesh ref={ringRef} position={[0, 0.1, 0]}>
      <torusGeometry args={[1.3, 0.015, 16, 100]} />
      <meshStandardMaterial
        color="#5B8AF0"
        emissive="#5B8AF0"
        emissiveIntensity={1.5}
        metalness={1}
        roughness={0}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

// Second thinner ring
function OrbitRing2() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    const t = state.clock.elapsedTime;
    ringRef.current.rotation.z = -t * 0.25;
    ringRef.current.rotation.y = Math.PI / 4;
  });

  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <torusGeometry args={[1.6, 0.008, 12, 80]} />
      <meshStandardMaterial
        color="#F06A2B"
        emissive="#F06A2B"
        emissiveIntensity={1}
        metalness={1}
        roughness={0}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

// Particle cloud
function ParticleCloud() {
  const ref = useRef<THREE.Points>(null);

  const { positions, speeds } = useMemo(() => {
    const count = 60;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 1.2 + Math.random() * 1.2;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) - 0.2;
      positions[i * 3 + 2] = r * Math.cos(phi);
      speeds[i] = 0.3 + Math.random() * 0.7;
    }
    return { positions, speeds };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.08;
    ref.current.rotation.x = Math.sin(t * 0.1) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#5B8AF0"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Radial glow pedestal
function Pedestal() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime) * 0.1;
  });
  return (
    <mesh ref={ref} position={[0, -1.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.9, 64]} />
      <meshStandardMaterial
        color="#5B8AF0"
        emissive="#5B8AF0"
        emissiveIntensity={0.3}
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

// Mouse listener wrapper
function Scene({ mouseX, mouseY }: { mouseX: React.MutableRefObject<number>; mouseY: React.MutableRefObject<number> }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[-3, 3, 2]} intensity={3} color="#5B8AF0" />
      <pointLight position={[3, -2, 1]} intensity={2} color="#F06A2B" />
      <pointLight position={[0, 2, 3]} intensity={1.5} color="#ffffff" />

      <Suspense fallback={null}>
        <AvatarForm mouseX={mouseX} mouseY={mouseY} />
        <OrbitRing mouseX={mouseX} mouseY={mouseY} />
        <OrbitRing2 />
        <ParticleCloud />
        <Pedestal />
        <Stars radius={30} depth={20} count={200} factor={1} saturation={0} fade speed={0.5} />
      </Suspense>
    </>
  );
}

export default function HeroCanvas() {
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.current = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouseY.current = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  const handleMouseLeave = () => {
    mouseX.current = 0;
    mouseY.current = 0;
  };

  const handleMouseMove3D = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: '3d_model_interact' });
    }
  };

  return (
    <div
      onMouseMove={(e) => { handleMouseMove(e); handleMouseMove3D(); }}
      onMouseLeave={handleMouseLeave}
      style={{ width: '100%', height: '100%', cursor: 'grab' }}
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Scene mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </div>
  );
}
