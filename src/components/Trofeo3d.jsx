import React , { useState } from 'react'
import '@google/model-viewer'

export default function Trofeo3D ({ modelPath }){

    return (
        <model-viewer
          src={modelPath}
          alt="Trofeo"
          autoplay
          auto-rotate={ true }
          style={{ width: '200px', height: '200px' }}
          exposure="1"
          shadow-intensity="1"
          camera-orbit="0deg 75deg"
          environment-image="neutral"
        />
    )
}