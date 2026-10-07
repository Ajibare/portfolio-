"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";

/**
 * Restrained abstract wireframe composition: a faint outer icosahedron, a
 * small accent octahedron core and two ambient rings. Slowly rotates and
 * eases toward the pointer. Purely decorative.
 */
function Core({ reduced }: { reduced: boolean }) {
  const outer = useRef<Group>(null);
  const inner = useRef<Mesh>(null);
  const ring = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const seconds = Math.min(delta, 0.05);

    if (outer.current) {
      outer.current.rotation.y += seconds * 0.16;
      if (!reduced) {
        outer.current.rotation.x = THREE.MathUtils.damp(
          outer.current.rotation.x,
          state.pointer.y * 0.32,
          3,
          seconds,
        );
        outer.current.position.x = THREE.MathUtils.damp(
          outer.current.position.x,
          state.pointer.x * 0.3,
          3,
          seconds,
        );
      }
    }
    if (inner.current) inner.current.rotation.x += seconds * 0.22;
    if (ring.current) ring.current.rotation.z += seconds * 0.3;
  });

  return (
    <group ref={outer}>
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.9}>
        <mesh>
          <icosahedronGeometry args={[1.9, 1]} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.16} />
        </mesh>
      </Float>
      <mesh ref={inner}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshBasicMaterial color="#a6b92d" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={ring}>
        <torusGeometry args={[2.5, 0.006, 12, 140]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.26} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0.15, 0]}>
        <torusGeometry args={[3, 0.004, 12, 160]} />
        <meshBasicMaterial color="#8a8a8a" transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  const reduced = useReducedMotion();

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
      aria-hidden
    >
      <Core reduced={Boolean(reduced)} />
    </Canvas>
  );
}