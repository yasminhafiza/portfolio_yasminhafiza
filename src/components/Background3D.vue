<template>
  <div class="fixed inset-0 z-[-50] overflow-hidden global-3d-bg">
    <canvas ref="canvas3d" @click="onClick"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import * as THREE from 'three';

const canvas3d = ref(null);

let renderer, scene, camera, clock;
let animFrameId;
let floatingObjects = [];
let gameParticles = [];
let confettiParticles = [];
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(-9999, -9999);
const screenMouse = new THREE.Vector2(-9999, -9999);
const targetMouse = new THREE.Vector2(0, 0);

// ── Game-Themed Materials ──
const M_PINK_NEON = new THREE.MeshPhysicalMaterial({ color: 0xff1493, roughness: 0.15, metalness: 0.6, emissive: 0xff1493, emissiveIntensity: 0.15 });
const M_GOLD_COIN = new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.2, metalness: 0.9, emissive: 0xffa500, emissiveIntensity: 0.1 });
const M_CYAN_GEM = new THREE.MeshPhysicalMaterial({ color: 0x00ffff, roughness: 0.05, metalness: 0.3, transmission: 0.6, thickness: 1.5, emissive: 0x00cccc, emissiveIntensity: 0.1 });
const M_PURPLE_CRYSTAL = new THREE.MeshPhysicalMaterial({ color: 0xcc66ff, roughness: 0.1, metalness: 0.4, transmission: 0.4, thickness: 1.0, emissive: 0x9933ff, emissiveIntensity: 0.15 });
const M_PINK_GLASS = new THREE.MeshPhysicalMaterial({ color: 0xff69b4, roughness: 0.1, transmission: 0.5, thickness: 0.8, emissive: 0xff1493, emissiveIntensity: 0.08 });
const M_RED_HP = new THREE.MeshStandardMaterial({ color: 0xff3366, roughness: 0.25, metalness: 0.5, emissive: 0xff0044, emissiveIntensity: 0.2 });
const M_GREEN_POWER = new THREE.MeshStandardMaterial({ color: 0x66ff66, roughness: 0.3, metalness: 0.4, emissive: 0x00ff00, emissiveIntensity: 0.1 });
const M_WHITE_GLOW = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1, metalness: 0.6, emissive: 0xffeeff, emissiveIntensity: 0.15 });

// ── Game Geometry Creators ──

// 🎮 Game Controller (D-Pad shape)
function createDPadGeometry() {
  const shape = new THREE.Shape();
  const s = 0.3; // arm width
  const l = 1.0; // arm length
  // Cross/plus shape
  shape.moveTo(-s, l);
  shape.lineTo(s, l);
  shape.lineTo(s, s);
  shape.lineTo(l, s);
  shape.lineTo(l, -s);
  shape.lineTo(s, -s);
  shape.lineTo(s, -l);
  shape.lineTo(-s, -l);
  shape.lineTo(-s, -s);
  shape.lineTo(-l, -s);
  shape.lineTo(-l, s);
  shape.lineTo(-s, s);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.3, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08, bevelSegments: 3 });
  geo.center();
  geo.scale(0.5, 0.5, 0.5);
  return geo;
}

// 🪙 Coin
function createCoinGeometry() {
  const geo = new THREE.CylinderGeometry(0.6, 0.6, 0.12, 32);
  geo.center();
  return geo;
}

// 💎 Gem / Crystal
function createGemGeometry() {
  // Diamond-like octahedron
  const geo = new THREE.OctahedronGeometry(0.65, 0);
  geo.scale(1, 1.4, 1);
  return geo;
}

// ⭐ Power Star (5-pointed extruded)
function createStarGeometry() {
  const pts = [];
  const numPts = 5;
  for (let i = 0; i < numPts * 2; i++) {
    const l = i % 2 === 1 ? 0.45 : 1;
    const a = (i / (numPts * 2)) * Math.PI * 2 - Math.PI / 2;
    pts.push(new THREE.Vector2(Math.sin(a) * l, Math.cos(a) * l));
  }
  const geo = new THREE.ExtrudeGeometry(new THREE.Shape(pts), { depth: 0.35, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.08, bevelThickness: 0.08 });
  geo.center();
  geo.scale(0.55, 0.55, 0.55);
  return geo;
}

// ❤️ Pixel Heart (HP)
function createPixelHeartGeometry() {
  const x = 0, y = 0;
  const shape = new THREE.Shape();
  shape.moveTo(x + 5, y + 5);
  shape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
  shape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
  shape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
  shape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
  shape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
  shape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 1.2, bevelEnabled: true, bevelThickness: 0.4, bevelSize: 0.4, bevelSegments: 2 });
  geo.center();
  geo.rotateX(Math.PI);
  geo.scale(0.055, 0.055, 0.055);
  return geo;
}

// 🎲 Dice
function createDiceGeometry() {
  const geo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
  return geo;
}

// 🍄 Power-Up Mushroom (simplified dome + stem)
function createMushroomGeometry() {
  const group = new THREE.Group();
  // Cap (hemisphere)
  const capGeo = new THREE.SphereGeometry(0.5, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  const cap = new THREE.Mesh(capGeo, M_RED_HP);
  cap.position.y = 0.3;
  group.add(cap);
  // Stem
  const stemGeo = new THREE.CylinderGeometry(0.25, 0.3, 0.4, 12);
  const stem = new THREE.Mesh(stemGeo, M_WHITE_GLOW);
  stem.position.y = 0.05;
  group.add(stem);
  return group;
}

// 🏆 Trophy (simplified)
function createTrophyGeometry() {
  const group = new THREE.Group();
  // Cup
  const cupGeo = new THREE.LatheGeometry([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.15, 0),
    new THREE.Vector2(0.15, 0.1),
    new THREE.Vector2(0.1, 0.15),
    new THREE.Vector2(0.1, 0.4),
    new THREE.Vector2(0.35, 0.5),
    new THREE.Vector2(0.4, 0.7),
    new THREE.Vector2(0.35, 0.9),
    new THREE.Vector2(0.3, 0.95),
  ], 16);
  const cup = new THREE.Mesh(cupGeo, M_GOLD_COIN);
  group.add(cup);
  group.scale.set(0.9, 0.9, 0.9);
  return group;
}

// 🔷 Game Gem (faceted)
function createGameGemGeometry() {
  const geo = new THREE.DodecahedronGeometry(0.5, 0);
  return geo;
}

// XP Orb (glowing sphere)
function createXPOrbGeometry() {
  const geo = new THREE.SphereGeometry(0.35, 16, 16);
  return geo;
}

// 🕹️ Joystick Stick
function createJoystickGeometry() {
  const group = new THREE.Group();
  // Base
  const baseGeo = new THREE.CylinderGeometry(0.4, 0.5, 0.15, 16);
  const base = new THREE.Mesh(baseGeo, M_PINK_NEON);
  group.add(base);
  // Stick
  const stickGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.6, 8);
  const stick = new THREE.Mesh(stickGeo, M_WHITE_GLOW);
  stick.position.y = 0.35;
  group.add(stick);
  // Ball top
  const ballGeo = new THREE.SphereGeometry(0.15, 12, 12);
  const ball = new THREE.Mesh(ballGeo, M_RED_HP);
  ball.position.y = 0.7;
  group.add(ball);
  group.scale.set(0.7, 0.7, 0.7);
  return group;
}

// ── Floating Game Particles (tiny XP sparkles) ──
function spawnGameParticles() {
  const colors = [0xff1493, 0xffd700, 0x00ffff, 0xcc66ff, 0xff69b4, 0x66ff66];
  for (let i = 0; i < 100; i++) {
    const geo = new THREE.SphereGeometry(0.04 + Math.random() * 0.06, 6, 6);
    const mat = new THREE.MeshBasicMaterial({
      color: colors[Math.floor(Math.random() * colors.length)],
      transparent: true,
      opacity: 0.4 + Math.random() * 0.4
    });
    const mesh = new THREE.Mesh(geo, mat);
    const x = (Math.random() - 0.5) * 40;
    const y = (Math.random() - 0.5) * 80;
    const z = (Math.random() - 0.5) * 20 - 5;
    mesh.position.set(x, y, z);
    scene.add(mesh);
    gameParticles.push({
      mesh,
      baseX: x, baseY: y, baseZ: z,
      speed: Math.random() * 0.5 + 0.3,
      phase: Math.random() * Math.PI * 2
    });
  }
}

// 💥 Confetti / Score Explosion on Click
function spawnConfetti(position) {
  const colors = [0xff1493, 0xffd700, 0x00ffff, 0xcc66ff, 0xff69b4, 0x66ff66, 0xffffff];
  const geo = new THREE.PlaneGeometry(0.25, 0.25);
  for (let i = 0; i < 35; i++) {
    const mat = new THREE.MeshBasicMaterial({ color: colors[Math.floor(Math.random() * colors.length)], side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(position);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    const speed = Math.random() * 0.35 + 0.1;
    scene.add(mesh);
    confettiParticles.push({
      mesh,
      vel: new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta) * speed,
        Math.sin(phi) * Math.sin(theta) * speed,
        Math.cos(phi) * speed
      ),
      life: 1.0,
      rotX: Math.random() * 0.3,
      rotY: Math.random() * 0.3
    });
  }
}

function onMouseMove(e) {
  targetMouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
  targetMouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
  screenMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  screenMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
}

function onClick() {
  raycaster.setFromCamera(screenMouse, camera);
  const meshes = floatingObjects.map(o => o.mesh).filter(Boolean);
  const intersects = raycaster.intersectObjects(meshes, true);

  if (intersects.length > 0) {
    const hit = intersects[0].object;
    spawnConfetti(hit.position.clone());
    // Bounce the object away
    const obj = floatingObjects.find(o => {
      if (o.mesh === hit) return true;
      if (o.mesh.children && o.mesh.children.includes(hit)) return true;
      return false;
    });
    if (obj) {
      obj.velY += 3;
      obj.velX += (Math.random() - 0.5) * 4;
    }
  }
}

function onResize() {
  if (!renderer || !camera) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  animFrameId = requestAnimationFrame(animate);
  const t = clock.getElapsedTime();

  // Camera parallax
  mouse.x += (targetMouse.x - mouse.x) * 0.05;
  mouse.y += (targetMouse.y - mouse.y) * 0.05;
  camera.position.x += (mouse.x * 2.5 - camera.position.x) * 0.04;
  camera.position.y += (mouse.y * 2.5 - camera.position.y) * 0.04;
  camera.lookAt(0, 0, 0);

  // World mouse position for repulsion
  const vec = new THREE.Vector3(screenMouse.x, screenMouse.y, 0.5);
  vec.unproject(camera);
  const dir = vec.sub(camera.position).normalize();
  const distance = -camera.position.z / dir.z;
  const worldMousePos = camera.position.clone().add(dir.multiplyScalar(distance));

  const scrollY = window.scrollY || 0;

  // ── Floating Game Objects Physics ──
  floatingObjects.forEach(obj => {
    const relativeY = obj.baseY + Math.sin(t * 1.0 + obj.phaseOffset) * 1.8 + (scrollY * 0.005 * (obj.mesh.scale?.x || 1));
    const targetX = obj.baseX + Math.cos(t * 0.7 + obj.phaseOffset) * 0.6;

    // Mouse repulsion
    const dx = obj.mesh.position.x - worldMousePos.x;
    const dy = obj.mesh.position.y - worldMousePos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 5) {
      const force = (5 - dist) / 5;
      obj.velX += (dx / dist) * force * 0.12;
      obj.velY += (dy / dist) * force * 0.12;
    }

    // Spring back to target
    obj.velX += (targetX - obj.mesh.position.x) * 0.015;
    obj.velY += (relativeY - obj.mesh.position.y) * 0.015;

    // Dampening
    obj.velX *= 0.92;
    obj.velY *= 0.92;

    obj.mesh.position.x += obj.velX;
    obj.mesh.position.y += obj.velY;

    // Game-style rotation (spin coins, tumble dice, etc.)
    obj.mesh.rotation.x += obj.rotSpeedX;
    obj.mesh.rotation.y += obj.rotSpeedY;
    obj.mesh.rotation.z += obj.rotSpeedZ || 0;
  });

  // ── XP Sparkle Particles ──
  gameParticles.forEach(p => {
    p.mesh.position.x = p.baseX + Math.sin(t * p.speed + p.phase) * 1.5;
    p.mesh.position.y = p.baseY + Math.cos(t * p.speed * 0.7 + p.phase) * 1.0 + (scrollY * 0.003);
    p.mesh.position.z = p.baseZ + Math.sin(t * 0.5 + p.phase) * 0.5;
    // Pulse glow
    const pulse = 0.5 + Math.sin(t * 3 + p.phase) * 0.3;
    p.mesh.material.opacity = pulse;
    const s = 0.8 + Math.sin(t * 4 + p.phase) * 0.3;
    p.mesh.scale.setScalar(s);
  });

  // ── Confetti update ──
  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
    p.mesh.position.add(p.vel);
    p.vel.y -= 0.008;
    p.mesh.rotation.x += p.rotX;
    p.mesh.rotation.y += p.rotY;
    p.life -= 0.018;
    p.mesh.scale.setScalar(Math.max(p.life, 0));
    if (p.life <= 0) {
      scene.remove(p.mesh);
      confettiParticles.splice(i, 1);
    }
  }

  renderer.render(scene, camera);
}

onMounted(() => {
  renderer = new THREE.WebGLRenderer({ canvas: canvas3d.value, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 150);
  camera.position.set(0, 0, 18);
  clock = new THREE.Clock();

  // ── Premium Gaming Lighting ──
  scene.add(new THREE.AmbientLight(0xffeeff, 0.8));
  const l1 = new THREE.PointLight(0xffffff, 2.5);
  l1.position.set(12, 12, 12);
  scene.add(l1);
  const l2 = new THREE.PointLight(0xff69b4, 3);
  l2.position.set(-12, 8, -10);
  scene.add(l2);
  const l3 = new THREE.PointLight(0x00ffff, 1.5);
  l3.position.set(8, -10, 5);
  scene.add(l3);
  const l4 = new THREE.PointLight(0xcc66ff, 1.5);
  l4.position.set(-8, -5, 8);
  scene.add(l4);

  // ── Game Object Geometry Database ──
  const singleGeometries = [
    createDPadGeometry(),
    createCoinGeometry(),
    createGemGeometry(),
    createStarGeometry(),
    createPixelHeartGeometry(),
    createDiceGeometry(),
    createGameGemGeometry(),
    createXPOrbGeometry(),
  ];

  const singleMaterials = [
    M_PINK_NEON,
    M_GOLD_COIN,
    M_CYAN_GEM,
    M_PURPLE_CRYSTAL,
    M_PINK_GLASS,
    M_RED_HP,
    M_GREEN_POWER,
    M_WHITE_GLOW,
  ];

  // Specific game-themed material assignments (for more intentional look)
  const geoMatPairs = [
    { geo: 0, mats: [M_PINK_NEON, M_PURPLE_CRYSTAL, M_WHITE_GLOW] },          // D-Pad
    { geo: 1, mats: [M_GOLD_COIN] },                                            // Coin (always gold)
    { geo: 2, mats: [M_CYAN_GEM, M_PURPLE_CRYSTAL, M_PINK_GLASS] },            // Gem
    { geo: 3, mats: [M_GOLD_COIN, M_PINK_NEON] },                              // Star
    { geo: 4, mats: [M_RED_HP, M_PINK_NEON] },                                  // Heart (HP)
    { geo: 5, mats: [M_WHITE_GLOW, M_PURPLE_CRYSTAL, M_PINK_GLASS] },          // Dice
    { geo: 6, mats: [M_CYAN_GEM, M_GREEN_POWER, M_PURPLE_CRYSTAL] },           // Dodecahedron gem
    { geo: 7, mats: [M_GREEN_POWER, M_CYAN_GEM, M_PINK_GLASS] },              // XP Orb
  ];

  // ── Spawn Simple Geometry Objects (50 items) ──
  for (let i = 0; i < 50; i++) {
    const pair = geoMatPairs[Math.floor(Math.random() * geoMatPairs.length)];
    const geo = singleGeometries[pair.geo];
    const mat = pair.mats[Math.floor(Math.random() * pair.mats.length)];
    const mesh = new THREE.Mesh(geo, mat);

    const scale = Math.random() * 0.6 + 0.35;
    mesh.scale.set(scale, scale, scale);

    const x = (Math.random() - 0.5) * 38;
    const y = (Math.random() - 0.5) * 70;
    const z = (Math.random() - 0.5) * 16 - 5;

    mesh.position.set(x, y, z);
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

    scene.add(mesh);
    floatingObjects.push({
      mesh, baseX: x, baseY: y,
      velX: 0, velY: 0,
      rotSpeedX: (Math.random() - 0.5) * 0.02,
      rotSpeedY: (Math.random() - 0.5) * 0.025,
      rotSpeedZ: (Math.random() - 0.5) * 0.015,
      phaseOffset: Math.random() * Math.PI * 2
    });
  }

  // ── Spawn Composite Game Objects (mushrooms, joysticks, trophies) ──
  const compositeCreators = [createMushroomGeometry, createJoystickGeometry, createTrophyGeometry];
  for (let i = 0; i < 15; i++) {
    const creator = compositeCreators[Math.floor(Math.random() * compositeCreators.length)];
    const group = creator();

    const scale = Math.random() * 0.5 + 0.4;
    group.scale.set(scale, scale, scale);

    const x = (Math.random() - 0.5) * 35;
    const y = (Math.random() - 0.5) * 65;
    const z = (Math.random() - 0.5) * 12 - 4;

    group.position.set(x, y, z);
    group.rotation.set(Math.random() * 0.5, Math.random() * Math.PI, Math.random() * 0.5);

    scene.add(group);
    floatingObjects.push({
      mesh: group, baseX: x, baseY: y,
      velX: 0, velY: 0,
      rotSpeedX: (Math.random() - 0.5) * 0.012,
      rotSpeedY: (Math.random() - 0.5) * 0.018,
      rotSpeedZ: (Math.random() - 0.5) * 0.01,
      phaseOffset: Math.random() * Math.PI * 2
    });
  }

  // ── Spawn XP Sparkle Particles ──
  spawnGameParticles();

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('resize', onResize);
  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(animFrameId);
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('resize', onResize);
  if (renderer) renderer.dispose();
  floatingObjects = [];
  gameParticles = [];
  confettiParticles = [];
});
</script>

<style scoped>
.global-3d-bg {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: -50;
  background: radial-gradient(ellipse at 30% 20%, #ffeaf1 0%, #ffc2db 35%, #f0b0d0 55%, #eea8cc 100%);
}

.global-3d-bg::before {
  content: "";
  position: absolute;
  inset: -50%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(204, 102, 255, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 60%);
  animation: gameBgShine 20s infinite alternate linear;
  pointer-events: none;
  z-index: 1;
}

.global-3d-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 105, 180, 0.015) 2px,
      rgba(255, 105, 180, 0.015) 4px
    );
  pointer-events: none;
  z-index: 1;
  opacity: 0.5;
}

@keyframes gameBgShine {
  0% { transform: scale(1) translate(0, 0) rotate(0deg); }
  50% { transform: scale(1.15) translate(1%, 1%) rotate(1deg); }
  100% { transform: scale(1.3) translate(2%, 2%) rotate(0deg); }
}

canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  cursor: crosshair;
}
</style>
