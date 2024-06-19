import React, { useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


function Model() {
    const model = useGLTF('/Quest3.glb')
    const initialPosition = [0, 0, 0];
    const obj = useRef(null)
    useFrame(() => {
        if (obj.current != null) {
            obj.current.rotation.y += 0.0009;
        }
    })

    return (
        <mesh position={initialPosition} ref={obj} scale={21}  >
            <primitive object={model.scene} />
            <OrbitControls enableZoom={false} />
        </mesh>
    )
}

export default Model
