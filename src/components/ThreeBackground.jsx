import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
import ErrorBoundary from './ErrorBoundary';

const AbstractShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <TorusKnot ref={meshRef} args={[9, 3, 256, 32]} position={[0, 0, -10]}>
      <meshStandardMaterial color="#CCFF00" wireframe opacity={0.2} transparent />
    </TorusKnot>
  );
};

const ThreeBackground = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <div className="fixed inset-0 z-0 bg-dark" />;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <ErrorBoundary fallback={<div className="hidden">WebGL Failed</div>}>
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
          <AbstractShape />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default ThreeBackground;
