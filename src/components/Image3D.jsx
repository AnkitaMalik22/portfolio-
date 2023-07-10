import React, { useRef } from "react";
import * as THREE from "three";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import store from "../store";

const Cube = () => {
  const textRef = useRef();
  const { darkMode, lightBG, darkBG } = useSnapshot(store);
  console.log(darkMode, lightBG, darkBG);//'rgb(124 58 237)' 'rgb(124 58 237)'

  useFrame((state) => {
    textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
  });
  

  const cubeColor = new THREE.Color().setStyle(darkBG);
  const textColor = "#ffffff";
  const outlineColor = new THREE.Color().setStyle(lightBG);

  

  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={cubeColor}  />
      <Text
        ref={textRef}
        fontSize={0.8}
        color={textColor}
        position={[0, 0, 1]}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.1}
        outlineColor={outlineColor}
      >
        Hello! I'm Ankita.
      </Text>
    </mesh>
  );
};

export default Cube;
