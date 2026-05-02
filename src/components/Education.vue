<template>
  <section id="education" class="py-16 lg:py-24 px-6 overflow-hidden font-quicksand perspective-container relative">
    
    <div class="absolute top-10 left-10 w-72 h-72 bg-pink-100/40 rounded-full blur-3xl z-0 pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-80 h-80 bg-[#ffb3d9]/20 rounded-full blur-3xl z-0 pointer-events-none"></div>

    <div class="max-w-6xl mx-auto relative z-10" ref="eduRef">
      
      <div class="text-center mb-20 relative transform-style-3d edu-title">
        <h2 class="text-[11px] font-black tracking-[0.8em] uppercase text-pink-400 mb-4 font-playfair" style="transform: translateZ(20px);">Academic</h2>
        <h3 class="text-4xl md:text-6xl font-playfair font-black text-[#ff1493] tracking-tighter uppercase leading-none" style="transform: translateZ(50px);">
          Education <span class="text-white drop-shadow-[2px_2px_0px_#ff1493]">Journey.</span>
        </h3>
        <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-gradient-to-r from-transparent via-[#ff1493] to-transparent rounded-full shadow-[0_0_10px_#ff1493]" style="transform: translateZ(10px);"></div>
      </div>

      <div class="space-y-16">
        
        <div class="group transform-style-3d edu-card">
          <div class="card-3d-cute border-l-[8px] border-l-[#ff1493]">
            <div class="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-3xl border-2 border-pink-200 flex items-center justify-center shadow-[0_10px_20px_rgba(255,105,180,0.3)] transform group-hover:rotate-12 group-hover:translate-z-30 transition-all duration-700">
              <span class="text-3xl drop-shadow-md">🎓</span>
            </div>

            <div class="flex flex-wrap justify-between items-start gap-4 mb-8">
              <div>
                <h3 class="text-3xl font-black text-[#d11276] leading-tight font-playfair drop-shadow-sm">Universitas Gunadarma</h3>
                <p class="text-[#ff1493] font-bold text-lg mt-1 tracking-wide">Bachelor’s Degree in Information Systems</p>
              </div>
              <span class="text-xs font-black bg-gradient-to-r from-[#ff69b4] to-[#ff1493] text-white px-5 py-2.5 rounded-xl uppercase tracking-widest shadow-[0_4px_15px_rgba(255,20,147,0.4)]">
                Sept 2021 - Aug 2025
              </span>
            </div>

            <div class="inline-block bg-pink-50 border border-pink-200 px-5 py-2 rounded-xl mb-8 shadow-[inset_0_2px_4px_rgba(255,255,255,1)]">
              <p class="text-[#ff1493] font-black text-sm tracking-widest uppercase">✨ GPA: <span class="text-2xl italic ml-1">3.79</span> <span class="text-xs text-pink-400">/ 4.00</span></p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 text-gray-700 text-[14.5px] leading-relaxed font-medium">
              <div class="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-dashed border-pink-200 hover:border-pink-400 hover:shadow-lg hover:-translate-y-1 transition-all">
                <p class="font-black text-[#d11276] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                  <span class="w-2.5 h-2.5 bg-[#ff1493] rounded-full shadow-[0_0_5px_#ff1493]"></span> Final Project
                </p>
                <p>Developed a <b>Web-Based GIS</b> for Flood-Prone Area Identification, applying <b>SDLC</b> methodology for public risk visualization tool.</p>
              </div>
              <div class="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-dashed border-pink-200 hover:border-pink-400 hover:shadow-lg hover:-translate-y-1 transition-all">
                <p class="font-black text-[#d11276] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                  <span class="w-2.5 h-2.5 bg-[#ff1493] rounded-full shadow-[0_0_5px_#ff1493]"></span> Academic Project
                </p>
                <p>Developed e-commerce for <b>Zafer Parfum</b> using <b>PHP and MySQL</b>, featuring product management and transactions.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="group transform-style-3d edu-card">
          <div class="card-3d-cute border-l-[8px] border-l-[#3b82f6] shadow-[0_20px_50px_rgba(59,130,246,0.15)]">
            <div class="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-3xl border-2 border-blue-200 flex items-center justify-center shadow-[0_10px_20px_rgba(59,130,246,0.3)] transform group-hover:-rotate-12 group-hover:translate-z-30 transition-all duration-700">
              <span class="text-3xl drop-shadow-md">☁️</span>
            </div>

            <div class="flex flex-wrap justify-between items-start gap-4 mb-8">
              <div>
                <h3 class="text-3xl font-black text-[#1e3a8a] leading-tight font-playfair drop-shadow-sm">Bangkit Academy</h3>
                <p class="text-[#3b82f6] font-bold text-lg mt-1 tracking-wide">Cloud Computing Cohort</p>
              </div>
              <span class="text-xs font-black bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] text-white px-5 py-2.5 rounded-xl uppercase tracking-widest shadow-[0_4px_15px_rgba(59,130,246,0.4)]">
                Feb 2024 - Jul 2024
              </span>
            </div>

            <div class="space-y-4 text-gray-700 text-[14.5px] leading-relaxed font-medium bg-white/60 p-6 rounded-2xl border border-dashed border-blue-200">
              <p class="flex gap-4 items-start">
                <span class="text-[#3b82f6] font-black text-lg">✿</span>
                <span>Developed cloud apps using <b>GCP</b>, including <b>Money Tracker</b> and <b>Cancer Prediction</b> projects.</span>
              </p>
              <p class="flex gap-4 items-start">
                <span class="text-[#3b82f6] font-black text-lg">✿</span>
                <span>Implemented <b>Compute Engine, Cloud SQL, and Storage</b> for deployment and data management.</span>
              </p>
              <p class="flex gap-4 items-start">
                <span class="text-[#3b82f6] font-black text-lg">✿</span>
                <span>Collaborated on a <b>Tourism Recommendation System</b> capstone project, integrating <b>Postman</b> for API testing.</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const eduRef = ref(null);

onMounted(() => {
  // Title Animation
  gsap.fromTo('.edu-title',
    { y: -50, opacity: 0, scale: 0.9 },
    { 
      y: 0, opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.5)',
      scrollTrigger: { trigger: eduRef.value, start: 'top 85%' }
    }
  );

  // Card Animation Setup
  const cards = gsap.utils.toArray('.edu-card');
  cards.forEach((card, i) => {
    gsap.fromTo(card,
      { y: 150, opacity: 0, rotateX: -15, scale: 0.95 },
      { 
        y: 0, opacity: 1, rotateX: 0, scale: 1, 
        duration: 1.2, ease: 'power4.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400;1,900&family=Quicksand:wght@500;600;700;800&display=swap');

.font-quicksand { font-family: 'Quicksand', sans-serif; }
.font-playfair { font-family: 'Playfair Display', serif; }

.perspective-container {
  perspective: 2500px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.card-3d-cute {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  @apply p-10 md:p-12 rounded-[3.5rem] relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)];
  box-shadow: 
    20px 30px 60px rgba(255,182,193,0.25), 
    -15px -15px 40px rgba(255,255,255,1);
  transform: rotateX(2deg) rotateY(-1deg);
  border-top: 1px solid rgba(255,255,255,0.9);
  border-right: 1px solid rgba(255,255,255,0.9);
}

.group:hover .card-3d-cute {
  transform: translateZ(50px) rotateX(0deg) rotateY(0deg);
  box-shadow: 
    40px 50px 80px rgba(255,105,180,0.15),
    -15px -15px 40px #ffffff;
}

.translate-z-30 {
  transform: translateZ(60px);
}

b { @apply text-gray-900 font-black; }
</style>