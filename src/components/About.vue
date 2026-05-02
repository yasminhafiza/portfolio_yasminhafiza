<template>
  <section id="about" class="py-16 md:py-32 w-full max-w-7xl mx-auto px-6 relative overflow-hidden font-quicksand perspective-2000">
    <div class="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/40 blur-[150px] rounded-full -z-10 animate-pulse"></div>
    <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ffb3d9]/30 blur-[130px] rounded-full -z-10"></div>

    <div class="grid md:grid-cols-2 gap-16 items-center" ref="aboutRef">
      <div class="relative group cursor-pointer about-left">
        <div class="relative aspect-[4/5] rounded-[3.5rem] p-[3px] bg-gradient-to-br from-[#ff69b4] via-[#ffb3d9] to-white shadow-[0_30px_60px_-15px_rgba(255,105,180,0.3)] transition-all duration-700 ease-out group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:scale-[1.02]">
          <div class="w-full h-full bg-white rounded-[3.4rem] overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent z-10 mix-blend-multiply"></div>
            
            <img 
              src="/src/assets/Yasmin Hafiza Isa Puteri.png" 
              alt="Yasmin Hafiza Isa Puteri"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div class="absolute top-8 left-8 z-20 transition-transform duration-700 group-hover:translate-z-20">
              <p class="text-[11px] text-white font-bold tracking-[0.4em] uppercase drop-shadow-md">Tech & Strategy ✿</p>
            </div>
          </div>
        </div>

        <div class="absolute -bottom-10 -right-10 bg-white/80 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-[20px_20px_50px_rgba(255,182,193,0.5)] border border-white z-30 transition-all duration-700 ease-out group-hover:translate-z-40 group-hover:-translate-y-4 group-hover:translate-x-4">
          <p class="text-[10px] text-[#d11276] font-black tracking-[0.4em] uppercase mb-2">Academic Excellence</p>
          <div class="flex items-baseline gap-1">
            <span class="text-6xl font-black text-[#ff1493] tracking-tighter italic drop-shadow-sm">3.79</span>
            <span class="text-pink-400 font-bold tracking-tighter text-2xl">/ 4.00</span>
          </div>
          <p class="text-[10px] text-pink-500 mt-2 font-mono font-bold uppercase tracking-[0.2em]">Information Systems</p>
          
          <div class="h-2 w-full bg-pink-100 mt-5 rounded-full overflow-hidden shadow-inner">
            <div class="h-full bg-gradient-to-r from-[#ff69b4] to-[#ff1493] w-[94%] shadow-[0_0_10px_rgba(255,20,147,0.5)]"></div>
          </div>
        </div>
      </div>

      <div class="relative about-right">
        <div class="inline-flex items-center gap-4 mb-8">
          <span class="h-[3px] w-12 bg-gradient-to-r from-[#ff1493] to-transparent rounded-full"></span>
          <span class="text-[11px] font-black tracking-[0.6em] uppercase text-[#d11276]">The Narrative</span>
        </div>

        <h2 class="font-playfair leading-[0.9] uppercase mb-12">
          <span class="block text-4xl md:text-5xl font-bold text-pink-400 italic tracking-tight">Analyzing Ideas,</span>
          <span class="block text-5xl md:text-7xl font-black text-[#ff1493] tracking-tighter mt-4 drop-shadow-md">Building <span class="text-white drop-shadow-[2px_2px_0px_#ff1493] uppercase">Solutions.</span></span>
        </h2>

        <div class="space-y-8">
          <p class="text-pink-800 text-xl font-bold leading-relaxed font-playfair italic border-l-4 border-[#ff1493] pl-6 bg-pink-50/70 p-4 rounded-r-2xl">
            I am a <span class="text-[#ff1493] font-black underline decoration-pink-300 underline-offset-8">Fresh Graduate in Information Systems</span> with an interest in system development, data-driven applications, requirements analysis, and project management.
          </p>

          <div class="text-gray-700 font-medium leading-relaxed text-base md:text-lg space-y-6">
            <p>
              I enjoy turning ideas into functional and user-friendly solutions. I have experience in developing responsive web interfaces, creating system documentation, and supporting system development using <span class="text-[#ff1493] font-bold">SDLC methodologies</span>.
            </p>
            <p>
              During my internship, I worked with <span class="text-[#ff69b4] font-bold">ERP (Astina)</span> and <span class="text-[#ff69b4] font-bold">Odoo</span> for invoice processing and IT asset management, and built dashboards using <span class="text-[#d11276] font-black">Power BI</span> to monitor expenses.
            </p>
            <p class="font-bold text-gray-900 border-b-2 border-pink-200 pb-2 inline-block">
              Currently open to opportunities in information technology. ✨
            </p>
          </div>
        </div>

        <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-pink-200 pt-12">
          <div class="group/item">
            <p class="text-[11px] font-black tracking-[0.4em] text-[#ff1493] uppercase mb-5">Core Expertise</p>
            <ul class="text-sm text-gray-700 space-y-4 font-bold tracking-wide italic">
              <li class="flex items-center gap-3 group-hover/item:translate-x-2 transition-transform duration-300"><span class="w-2.5 h-2.5 bg-[#ff1493] rounded-full shadow-[0_0_8px_#ff1493]"></span> System Analyst & PM</li>
              <li class="flex items-center gap-3 group-hover/item:translate-x-2 transition-transform duration-300 delay-75"><span class="w-2.5 h-2.5 bg-[#ff1493] rounded-full shadow-[0_0_8px_#ff1493]"></span> Power BI Analytics</li>
              <li class="flex items-center gap-3 group-hover/item:translate-x-2 transition-transform duration-300 delay-150"><span class="w-2.5 h-2.5 bg-[#ff1493] rounded-full shadow-[0_0_8px_#ff1493]"></span> ERP & Odoo Management</li>
            </ul>
          </div>
          <div class="group/item">
            <p class="text-[11px] font-black tracking-[0.4em] text-pink-500 uppercase mb-5">Technical Proficiency</p>
            <ul class="text-sm text-gray-700 space-y-4 font-bold tracking-wide italic">
              <li class="flex items-center gap-3 group-hover/item:translate-x-2 transition-transform duration-300"><span class="w-2.5 h-2.5 bg-pink-400 rounded-full shadow-[0_0_8px_#ffb3d9]"></span> Frontend Development</li>
              <li class="flex items-center gap-3 group-hover/item:translate-x-2 transition-transform duration-300 delay-75"><span class="w-2.5 h-2.5 bg-pink-400 rounded-full shadow-[0_0_8px_#ffb3d9]"></span> Technical Documentation</li>
              <li class="flex items-center gap-3 group-hover/item:translate-x-2 transition-transform duration-300 delay-150"><span class="w-2.5 h-2.5 bg-pink-400 rounded-full shadow-[0_0_8px_#ffb3d9]"></span> SDLC Methodologies</li>
            </ul>
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

const aboutRef = ref(null);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutRef.value,
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none reverse'
    }
  });

  tl.fromTo('.about-left', 
    { x: -100, opacity: 0, rotateY: -15 }, 
    { x: 0, opacity: 1, rotateY: 0, duration: 1.2, ease: 'power3.out' }
  )
  .fromTo('.about-right', 
    { x: 100, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
    '-=1'
  );
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400;1,900&family=Quicksand:wght@500;600;700&display=swap');

.font-quicksand { font-family: 'Quicksand', sans-serif; }
.font-playfair { font-family: 'Playfair Display', serif; }

.perspective-2000 { perspective: 2000px; }

.group:hover .group-hover\:rotate-y-12 {
  transform: rotateY(12deg) rotateX(6deg);
}

.translate-z-20 { transform: translateZ(20px); }
.translate-z-40 { transform: translateZ(60px); }

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}
.animate-pulse { animation: pulse-slow 6s ease-in-out infinite; }
</style>