import React from 'react';

const Lights = () => {
  const shadowProps = {
    mapSize: { width: 1024, height: 1024 },
    camera: { far: 50, left: -10, right: 10, top: 10, bottom: -10 },
  };
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[-8, 16, -8]}
        intensity={0}
        shadow={shadowProps}
      />
      <pointLight position={[0, 50, 0]} intensity={2} />
    </>
  );
};

export default Lights;
