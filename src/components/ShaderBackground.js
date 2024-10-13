import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';

function ShaderBackground() {
    return (
        <ShaderGradientCanvas
            importedFiber={{ ...fiber, ...drei, ...reactSpring }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        >
            <ShaderGradient
                type="waterPlane"
                cDistance={4}
                cPolarAngle={125}
                color1="#ec5094"
                color2="#e9949d"
                color3="#000000"
                animate="on"
                uSpeed={0.1}
                uDensity={1.0}
                uFrequency={5.5}
                uStrength={3}
                uColorBlend={0.5}
                brightness={2}
                grain="on"
                grainBlending={0.2}
            />
        </ShaderGradientCanvas>
    );
}

export default ShaderBackground;
