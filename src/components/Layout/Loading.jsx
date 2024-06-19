import { Html, Loader } from '@react-three/drei'
import React from 'react'

function Loading() {
    return (
        <Html>
            <Loader barStyles={{ color: "black", backgroundColor: "black" }} />
        </Html>
    )
}

export default Loading