import { useEffect, useRef } from 'react'
import WebGLFluid from 'webgl-fluid'

export default function FluidSimulation({ width = '100%', height = '100%' }) {
  const canvasRef = useRef(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || initializedRef.current) return
    initializedRef.current = true

    WebGLFluid(canvas, {
      TRIGGER: 'hover',
      IMMEDIATE: true,
      AUTO: true,
      INTERVAL: 3500,
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 3.5,
      VELOCITY_DISSIPATION: 1.8,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 20,
      SPLAT_RADIUS: 0.3,
      SPLAT_FORCE: 4000,
      SPLAT_COUNT: 5,
      COLORFUL: false,
      SPLAT_COLOR: { r: 0.92, g: 0.92, b: 0.92 },
      TRANSPARENT: false,
      BACK_COLOR: { r: 0.1, g: 0.1, b: 0.1 },
      SHADING: true,
      BLOOM: false,
      SUNRAYS: false,
    })

    // webgl-fluid has no teardown API: calling it starts an internal
    // requestAnimationFrame loop and attaches window-level listeners with no
    // returned handle to cancel them. The guard above keeps this from
    // double-initializing under React StrictMode's dev double-invoke; a true
    // unmount can't fully release its resources.
  }, [])

  return (
    // The library's display shader ties opacity directly to color
    // brightness, so dark smoke on a light backdrop is structurally
    // near-invisible no matter how SPLAT_COLOR is tuned. Rendering bright
    // smoke on a dark backdrop (the one setup this shader handles well) and
    // flipping the whole canvas with `invert` gets a white page with
    // black/gray smoke without touching the simulation itself.
    <canvas
      ref={canvasRef}
      style={{ width, height }}
      className="block invert bg-[#1a1a1a]"
    />
  )
}
