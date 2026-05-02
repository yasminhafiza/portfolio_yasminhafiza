<template>
  <div class="hero-wrapper" @mousemove="onMouseMove">
    <div class="corner-tag"><strong>YASMIN</strong> &nbsp;✿&nbsp; Portfolio &nbsp;✿&nbsp; 2026</div>

    <!-- Floating Emoji Bubbles -->
    <div class="bubbles-container" aria-hidden="true">
      <span v-for="(b, i) in bubbles" :key="i" class="bubble" :style="b.style">{{ b.emoji }}</span>
    </div>

    <div class="ui-layer">

      <!-- Animated Gradient Border Name Block -->
      <div class="name-block" ref="nameBlock" :style="nameParallax">
        <div class="name-glow"></div>
        <span class="name-sub hero-anim">Hi, I'm</span>
        <span class="name-main hero-anim">Yasmin.</span>
      </div>

      <!-- Typing Effect Tagline -->
      <p class="tagline hero-anim" ref="taglineRef">
        <span class="tagline-typed">{{ displayedText }}<span class="cursor-blink">|</span></span>
      </p>

      <div class="cta-row hero-anim">
        <a href="#projects" class="btn-primary">
          <span class="btn-shine"></span>
          View My Work ✿
        </a>
        <a href="#contact" class="btn-game">Say Hello ツ</a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-line hero-anim">
      <span>Scroll</span>
      <div class="scroll-track">
        <div class="scroll-fill"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, reactive, computed } from 'vue';
import gsap from 'gsap';

const nameBlock = ref(null);
const taglineRef = ref(null);

// Mouse parallax
const mousePos = reactive({ x: 0, y: 0 });
const nameParallax = computed(() => ({
  transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 10}px)`
}));

const onMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  mousePos.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
  mousePos.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
};

// Typing effect
const fullText = "Fresh Graduate in Information Systems — passionate about systems, business processes, and digital solutions.";
const displayedText = ref('');
let typeIndex = 0;
let typeTimer = null;

function typeText() {
  if (typeIndex <= fullText.length) {
    displayedText.value = fullText.slice(0, typeIndex);
    typeIndex++;
    typeTimer = setTimeout(typeText, 35);
  }
}

// Floating bubbles
const emojis = ['✿', '★', '♡', '☁', '✦', '♪', '❀', '⚝', '◆', '♥'];
const bubbles = ref([]);

function generateBubbles() {
  const arr = [];
  for (let i = 0; i < 18; i++) {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const left = Math.random() * 100;
    const size = 14 + Math.random() * 22;
    const duration = 8 + Math.random() * 14;
    const delay = Math.random() * 12;
    const opacity = 0.08 + Math.random() * 0.18;
    arr.push({
      emoji,
      style: {
        left: `${left}%`,
        fontSize: `${size}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        opacity
      }
    });
  }
  bubbles.value = arr;
}

onMounted(() => {
  generateBubbles();

  // GSAP stagger entrance
  const tl = gsap.timeline({ delay: 0.3 });

  tl.fromTo('.corner-tag',
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
  )
  .fromTo('.hero-anim',
    { opacity: 0, y: 40, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.18, ease: 'back.out(1.2)' },
    '-=0.4'
  );

  // Start typing after name animation
  setTimeout(() => typeText(), 1800);
});

onUnmounted(() => {
  if (typeTimer) clearTimeout(typeTimer);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400;1,900&family=Space+Mono:wght@400;700&display=swap');

.hero-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  font-family: 'Space Mono', monospace;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* ── Corner Tag ── */
.corner-tag {
  position: absolute;
  top: 90px;
  left: 36px;
  font-size: 9px;
  letter-spacing: 0.28em;
  color: #c02068;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 10;
}
.corner-tag strong {
  color: #ff1493;
}

/* ── Floating Emoji Bubbles ── */
.bubbles-container {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.bubble {
  position: absolute;
  bottom: -60px;
  animation: floatUp linear infinite;
  filter: blur(0.5px);
  user-select: none;
}

@keyframes floatUp {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
    opacity: var(--bubble-opacity, 0.15);
  }
  50% {
    transform: translateY(-50vh) rotate(180deg) scale(1.1);
    opacity: var(--bubble-opacity, 0.2);
  }
  100% {
    transform: translateY(-110vh) rotate(360deg) scale(0.8);
    opacity: 0;
  }
}

/* ── UI Layer ── */
.ui-layer {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

/* ── Name Block with Animated Gradient Border ── */
.name-block {
  text-align: center;
  margin-bottom: 24px;
  position: relative;
  padding: 20px 40px;
  transition: transform 0.15s ease-out;
}

.name-glow {
  position: absolute;
  inset: -3px;
  border-radius: 2rem;
  background: linear-gradient(270deg, #ff1493, #ff69b4, #cc66ff, #ff69b4, #ff1493);
  background-size: 600% 600%;
  animation: gradientBorder 6s ease infinite;
  opacity: 0.4;
  filter: blur(12px);
  z-index: -1;
}

@keyframes gradientBorder {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.name-sub {
  display: block;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: clamp(20px, 5vw, 56px);
  color: #a8004e;
  letter-spacing: 0.05em;
  line-height: 1.1;
  text-shadow: 0 2px 10px rgba(168, 0, 78, 0.35);
}

.name-main {
  display: block;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(45px, 12vw, 120px);
  line-height: 0.9;
  letter-spacing: -0.03em;
  background: linear-gradient(130deg, #b3005e 0%, #ff0080 40%, #d4006b 80%, #a8004e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 6px 20px rgba(179, 0, 94, 0.45));
  -webkit-text-stroke: 1px rgba(140, 0, 60, 0.1);
  animation: nameShimmer 4s ease-in-out infinite;
}

@keyframes nameShimmer {
  0%, 100% { filter: drop-shadow(0 6px 20px rgba(179, 0, 94, 0.45)); }
  50% { filter: drop-shadow(0 6px 30px rgba(255, 20, 147, 0.6)); }
}

/* ── Tagline with Typing ── */
.tagline {
  max-width: 650px;
  width: 90%;
  text-align: center;
  font-size: clamp(11px, 3vw, 14px);
  line-height: 2.2;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: #a0205c;
  margin-bottom: 44px;
  text-shadow: 1px 1px 4px rgba(255,255,255,0.8);
  min-height: 3.5em;
}

.tagline-typed {
  display: inline;
}

.cursor-blink {
  font-weight: 100;
  color: #ff1493;
  animation: blink 0.8s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* ── CTA Row ── */
.cta-row {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  pointer-events: auto;
}

.btn-primary {
  position: relative;
  padding: 15px 36px;
  background: linear-gradient(135deg, #ff69b4, #ff1493);
  color: #fff;
  border: none;
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.24em;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(255, 20, 147, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  overflow: hidden;
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: skewX(-20deg);
  animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
  0% { left: -100%; }
  50% { left: 150%; }
  100% { left: 150%; }
}

.btn-primary:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 30px rgba(255, 20, 147, 0.5);
}

/* ── Tombol Game (Say Hello) ── */
.btn-game {
  position: relative;
  padding: 14px 34px;
  background: #fff;
  color: #ff1493;
  border: 2px solid #ff1493;
  border-bottom: 6px solid #ff1493;
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.1s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.btn-game:hover {
  background: #fff5f9;
  transform: translateY(2px);
  border-bottom-width: 4px;
}

.btn-game:active {
  transform: translateY(6px);
  border-bottom-width: 0px;
  background: #ff1493;
  color: #fff;
}

/* ── Scroll Indicator ── */
.scroll-line {
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 10;
}

.scroll-line span {
  font-size: 9px;
  font-weight: bold;
  letter-spacing: 0.3em;
  color: #d13076;
  text-transform: uppercase;
}

.scroll-track {
  width: 2px;
  height: 54px;
  background: rgba(255, 105, 180, 0.2);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.scroll-fill {
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, #ff1493);
  animation: scrollFill 2.2s cubic-bezier(0.4, 0, 0.3, 1) infinite;
}

/* ── Keyframes ── */
@keyframes scrollFill {
  0%   { top: -100%; }
  100% { top: 100%; }
}

/* Responsive Fix */
@media (max-width: 768px) {
  .corner-tag {
    left: 20px;
    top: 80px;
  }
  .name-block {
    padding: 10px 20px;
  }
}
</style>