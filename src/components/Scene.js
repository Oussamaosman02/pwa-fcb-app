/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: CadForCam (https://sketchfab.com/yuelands)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/escudo-fcb-d97020bb0bf74ac48aee15093622a868
title: Escudo FCB
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ModelE({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./assets/escudo/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} receiveShadow material={materials['Scene_-_Root']} />
      </group>
    </group>
  )
}

useGLTF.preload('./assets/escudo/scene.gltf')