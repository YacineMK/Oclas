import React, { useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


function Model() {
    const model = useGLTF('/vr_web.glb')
    const initialPosition = [0, 0, 0];
    const obj = useRef(null)
    // useFrame(() => {
    //     if (obj.current != null) {
    //         obj.current.rotation.y += 0.001;
    //     }
    // })

    return (
        <mesh position={initialPosition} ref={obj} rotation={[0.01, 80, 0.01]} >
            <primitive object={model.scene} />
            <OrbitControls enableZoom={false} />
        </mesh>
    )
}

export default Model