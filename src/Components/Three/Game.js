import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, softShadows, Loader } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import ChestModel from './GLTF/Chest';
import Lights from './Lights';
import Floor from './Floor';

// soften shadows with drei softShadows();
softShadows();

export default function Game() {
  const [chestOpen, setChestOpen] = useState(false);

  return (
    <>
      <Canvas
        colorManagement
        shadows
        camera={{ position: [-5, 4, 4], fov: 40 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <ChestModel open={chestOpen} setOpen={setChestOpen} />
          <Floor />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
