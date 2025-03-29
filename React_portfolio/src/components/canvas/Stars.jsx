import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  // const [sphere] = useState(() =>
  //   random.inSphere(new Float32Array(5000), { radius: 1.2 })
  // );

  const [sphere] = useState(() => {
    const rawSphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

    // Replace NaN values with zeros
    for (let i = 0; i < rawSphere.length; i++) {
      if (isNaN(rawSphere[i]) || !isFinite(rawSphere[i])) {
        rawSphere[i] = 0; // Fallback to 0 for invalid values
      }
    }

    // Ensure array length is divisible by 3
    const length = Math.floor(rawSphere.length / 3) * 3;
    return rawSphere.slice(0, length);
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const canvasRef = useRef();
  // Cleanup WebGL context on unmount
  useEffect(() => {
    return () => {
      if (canvasRef.current) {
        const gl = canvasRef.current.gl;
        gl.dispose(); // Dispose WebGL context
      }
    };
  }, []);

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas ref={canvasRef} camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
