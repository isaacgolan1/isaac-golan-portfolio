import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const PARTICLE_COUNT = 3500
const INTERACTION_RADIUS = 2.6
const REPEL_STRENGTH = 11
const SWIRL_STRENGTH = 16
const DRAG_STRENGTH = 12
const SPRING = 2.6
const DAMPING = 0.95

export default function ParticleBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
    camera.position.z = 8

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const seeds = new Float32Array(PARTICLE_COUNT * 3)
    const turbVel = new Float32Array(PARTICLE_COUNT * 2)
    const turbOffset = new Float32Array(PARTICLE_COUNT * 2)
    const colors = new Float32Array(PARTICLE_COUNT * 3)

    const colorA = new THREE.Color('#22d3ee')
    const colorB = new THREE.Color('#818cf8')
    const colorC = new THREE.Color('#f0abfc')

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 12
      positions[i3 + 1] = (Math.random() - 0.5) * 8
      positions[i3 + 2] = (Math.random() - 0.5) * 6

      seeds[i3] = Math.random() * Math.PI * 2
      seeds[i3 + 1] = 0.3 + Math.random() * 0.7
      seeds[i3 + 2] = 0.2 + Math.random() * 0.6

      const mixed =
        Math.random() < 0.85
          ? colorA.clone().lerp(colorB, Math.random())
          : colorA.clone().lerp(colorC, Math.random())
      colors[i3] = mixed.r
      colors[i3 + 1] = mixed.g
      colors[i3 + 2] = mixed.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const basePositions = positions.slice()
    const clock = new THREE.Clock()
    let frameId

    const raycaster = new THREE.Raycaster()
    const interactionPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
    const mouseWorld = new THREE.Vector3(9999, 9999, 0)
    const pointerNdc = new THREE.Vector2(9999, 9999)
    let hovering = false
    let needsMouseSample = true
    let prevMouseX = 0
    let prevMouseY = 0
    let mouseVelX = 0
    let mouseVelY = 0

    const updateMouseWorld = (dt) => {
      if (!hovering) {
        mouseVelX = 0
        mouseVelY = 0
        return
      }
      raycaster.setFromCamera(pointerNdc, camera)
      raycaster.ray.intersectPlane(interactionPlane, mouseWorld)

      if (needsMouseSample) {
        prevMouseX = mouseWorld.x
        prevMouseY = mouseWorld.y
        needsMouseSample = false
      }

      const safeDt = Math.max(dt, 1 / 120)
      mouseVelX = (mouseWorld.x - prevMouseX) / safeDt
      mouseVelY = (mouseWorld.y - prevMouseY) / safeDt
      prevMouseX = mouseWorld.x
      prevMouseY = mouseWorld.y
    }

    const handlePointerMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect()
      pointerNdc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointerNdc.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
      hovering = true
    }

    const handlePointerLeave = () => {
      hovering = false
      needsMouseSample = true
      mouseWorld.set(9999, 9999, 0)
    }

    renderer.domElement.addEventListener('pointermove', handlePointerMove)
    renderer.domElement.addEventListener('pointerleave', handlePointerLeave)

    let elapsed = 0

    const animate = () => {
      const dt = Math.min(clock.getDelta(), 0.05)
      elapsed += dt
      const t = elapsed
      updateMouseWorld(dt)

      const posAttr = geometry.attributes.position
      const arr = posAttr.array

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3
        const i2 = i * 2
        const phase = seeds[i3]
        const speed = seeds[i3 + 1]
        const amp = seeds[i3 + 2]

        const baseX = basePositions[i3] + Math.sin(t * speed + phase) * amp
        const baseY =
          basePositions[i3 + 1] + Math.cos(t * speed * 0.8 + phase) * amp
        const baseZ =
          basePositions[i3 + 2] +
          Math.sin(t * speed * 0.6 + phase * 1.3) * amp * 0.5

        const px = baseX + turbOffset[i2]
        const py = baseY + turbOffset[i2 + 1]

        const dx = px - mouseWorld.x
        const dy = py - mouseWorld.y
        const distSq = dx * dx + dy * dy

        if (distSq < INTERACTION_RADIUS * INTERACTION_RADIUS) {
          const dist = Math.sqrt(distSq) || 0.0001
          const falloff = 1 - dist / INTERACTION_RADIUS
          const nx = dx / dist
          const ny = dy / dist

          turbVel[i2] +=
            (nx * REPEL_STRENGTH - ny * SWIRL_STRENGTH) * falloff * dt
          turbVel[i2 + 1] +=
            (ny * REPEL_STRENGTH + nx * SWIRL_STRENGTH) * falloff * dt

          turbVel[i2] += mouseVelX * DRAG_STRENGTH * falloff * dt
          turbVel[i2 + 1] += mouseVelY * DRAG_STRENGTH * falloff * dt
        }

        turbVel[i2] += -SPRING * turbOffset[i2] * dt
        turbVel[i2 + 1] += -SPRING * turbOffset[i2 + 1] * dt
        turbVel[i2] *= DAMPING
        turbVel[i2 + 1] *= DAMPING

        turbOffset[i2] += turbVel[i2] * dt
        turbOffset[i2 + 1] += turbVel[i2 + 1] * dt

        arr[i3] = baseX + turbOffset[i2]
        arr[i3 + 1] = baseY + turbOffset[i2 + 1]
        arr[i3 + 2] = baseZ
      }

      posAttr.needsUpdate = true

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    const resize = () => {
      const { clientWidth, clientHeight } = container
      if (clientWidth === 0 || clientHeight === 0) return
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(clientWidth, clientHeight)
    }

    resize()
    animate()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      renderer.domElement.removeEventListener('pointermove', handlePointerMove)
      renderer.domElement.removeEventListener('pointerleave', handlePointerLeave)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="h-full w-full bg-gradient-to-br from-[#050914] via-[#0a1633] to-[#050914]"
    />
  )
}
