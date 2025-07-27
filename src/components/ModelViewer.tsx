import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Bounds } from "@react-three/drei";
import { FC } from "react";
import { Group } from "three";

interface GLTFResult {
  scene: Group;
}

const Model: FC = () => {
  const { scene } = useGLTF(
    "/models/LittlestTokyo.glb",
  ) as unknown as GLTFResult;
  return <primitive object={scene} scale={0.05} />; // Adjusted scale to fit 100px canvas
};

const ModelViewer: FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 1, 2], fov: 50 }} // Adjusted for 100px canvas
      style={{ width: "500px", height: "515px" }} // Set to 100px x 100px
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      {/* Tự động center and fit model */}
      <Bounds fit clip observe margin={1.0}>
        <Center>
          <Model />
        </Center>
      </Bounds>

      <OrbitControls makeDefault />
    </Canvas>
  );
};

export default ModelViewer;

useGLTF.preload("/models/LittlestTokyo.glb");
