import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import ChestModel from './GLTF/Chest';
import Lights from './Lights';

// function Box() {
//   const [boxRef, boxApi] = useBox(() => ({ mass: 1 }));
//   return (
//     <mesh
//       onClick={() => {
//         boxApi.velocity.set(0, 5, 0);
//       }}
//       ref={boxRef}
//       position={[0, 2, 0]}
//     >
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   );
// }

// function Ground() {
//   const [groundRef] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
//   return (
//     <mesh ref={groundRef} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//       <planeBufferGeometry attach="geometry" args={[100, 100]} />
//       <meshLambertMaterial attach="material" color="lightblue" />
//     </mesh>
//   );
// }

export default function Game() {
  return (
    <Canvas
      colorManagement
      shadowMap
      camera={{ position: [-5, 4, 4], fov: 40 }}
    >
      <Suspense fallback={null}>
        <ChestModel />
      </Suspense>
      <color attach="background" args={['black']} />
      <OrbitControls />
      <Lights />
      {/* <Physics>
        <Box />
        <Ground />
      </Physics> */}
    </Canvas>
  );
}
