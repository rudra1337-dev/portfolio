"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";
function FloatingGeometry({ position, geometry, color, speed = 1 }) {
    const meshRef = useRef(null);
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
        }
    });
    const geometryComponent = useMemo(() => {
        switch (geometry) {
            case "octahedron":
                return <octahedronGeometry args={[1, 0]}/>;
            case "icosahedron":
                return <icosahedronGeometry args={[1, 0]}/>;
            case "dodecahedron":
                return <dodecahedronGeometry args={[1, 0]}/>;
            case "torus":
                return <torusGeometry args={[1, 0.4, 16, 32]}/>;
            case "torusKnot":
                return <torusKnotGeometry args={[0.8, 0.3, 100, 16]}/>;
            default:
                return <octahedronGeometry args={[1, 0]}/>;
        }
    }, [geometry]);
    return (<Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {geometryComponent}
        <meshStandardMaterial color={color} wireframe transparent opacity={0.6}/>
      </mesh>
    </Float>);
}
function ParticleField({ count = 500, isDark }) {
    const points = useRef(null);
    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        return positions;
    }, [count]);
    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.elapsedTime * 0.02;
            points.current.rotation.x = state.clock.elapsedTime * 0.01;
        }
    });
    return (<points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particlesPosition} itemSize={3}/>
      </bufferGeometry>
      <pointsMaterial size={0.05} color={isDark ? "#a78bfa" : "#7c3aed"} transparent opacity={0.6} sizeAttenuation/>
    </points>);
}
function MouseFollower({ isDark }) {
    const meshRef = useRef(null);
    const { viewport } = useThree();
    useFrame(({ pointer }) => {
        if (meshRef.current) {
            const x = (pointer.x * viewport.width) / 2;
            const y = (pointer.y * viewport.height) / 2;
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x, 0.05);
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y, 0.05);
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });
    return (<mesh ref={meshRef} position={[0, 0, -5]}>
      <icosahedronGeometry args={[0.5, 1]}/>
      <meshStandardMaterial color={isDark ? "#22d3ee" : "#0891b2"} emissive={isDark ? "#22d3ee" : "#0891b2"} emissiveIntensity={0.2} wireframe transparent opacity={0.8}/>
    </mesh>);
}
function Scene({ isDark }) {
    const primaryColor = isDark ? "#a78bfa" : "#7c3aed";
    const accentColor = isDark ? "#22d3ee" : "#0891b2";
    return (<>
      <ambientLight intensity={0.3}/>
      <pointLight position={[10, 10, 10]} intensity={0.5}/>
      <pointLight position={[-10, -10, -10]} intensity={0.3} color={accentColor}/>

      <FloatingGeometry position={[-6, 3, -8]} geometry="octahedron" color={primaryColor} speed={0.8}/>
      <FloatingGeometry position={[7, -2, -10]} geometry="icosahedron" color={accentColor} speed={1.2}/>
      <FloatingGeometry position={[-4, -4, -12]} geometry="dodecahedron" color={primaryColor} speed={0.6}/>
      <FloatingGeometry position={[5, 4, -6]} geometry="torus" color={accentColor} speed={1}/>
      <FloatingGeometry position={[0, -5, -15]} geometry="torusKnot" color={primaryColor} speed={0.5}/>

      <ParticleField count={300} isDark={isDark}/>
      <MouseFollower isDark={isDark}/>

      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1}/>

      <Environment preset={isDark ? "night" : "dawn"}/>
    </>);
}
export function SceneBackground() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    return (<div className="fixed inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <Scene isDark={isDark}/>
      </Canvas>
    </div>);
}
