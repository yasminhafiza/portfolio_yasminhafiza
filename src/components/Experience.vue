<template>
  <section id="experience" class="py-16 md:py-32 px-6 overflow-hidden font-quicksand relative perspective-container">
    
    <!-- Cute floating 3D rings in background -->
    <div class="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-[#ffb3d9]/30 rounded-full select-none pointer-events-none z-0 mix-blend-multiply"></div>
    <div class="absolute bottom-10 -right-24 w-80 h-80 border-[30px] border-[#ff69b4]/20 rounded-full select-none pointer-events-none z-0 mix-blend-multiply"></div>

    <div class="max-w-6xl mx-auto relative z-10" ref="expRef">
      
      <div class="text-center mb-28 relative transform-style-3d exp-title">
        <h2 class="text-[11px] font-black tracking-[0.8em] uppercase text-[#ff1493] mb-4 font-playfair" style="transform: translateZ(20px);">Journey</h2>
        <h3 class="text-5xl md:text-7xl font-playfair font-black text-[#d11276] tracking-tighter uppercase leading-none" style="transform: translateZ(50px);">
          Work <span class="text-white drop-shadow-[2px_4px_0px_#ff1493]">History.</span>
        </h3>
        <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-[4px] bg-gradient-to-r from-transparent via-[#ff1493] to-transparent rounded-full shadow-[0_0_10px_#ff1493]" style="transform: translateZ(10px);"></div>
      </div>

      <div class="relative px-4">
        <!-- Pink glowing timeline line -->
        <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-2 bg-pink-200/50 rounded-full shadow-[inset_0_0_5px_rgba(255,105,180,0.5)] timeline-line overflow-hidden">
          <div class="w-full h-0 bg-gradient-to-b from-[#ffb3d9] via-[#ff1493] to-[#ff69b4] timeline-progress shadow-[0_0_15px_#ff1493]"></div>
        </div>

        <div class="space-y-32">
          
          <div class="relative flex flex-col md:flex-row items-center justify-between group transform-style-3d exp-card">
            <!-- Timeline Orb -->
            <div class="absolute left-[-10px] md:left-1/2 md:-translate-x-1/2 top-14 w-12 h-12 bg-gradient-to-br from-[#ff69b4] to-[#ff1493] rounded-full z-20 shadow-[inset_0_4px_8px_rgba(255,255,255,0.6),_0_10px_20px_rgba(255,20,147,0.4)] transition-all duration-500 group-hover:scale-125 border-4 border-white flex items-center justify-center">
              <div class="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            </div>

            <div class="md:w-[48%] w-full pl-12 md:pl-0">
              <div class="card-3d-advanced left glass-pink">
                <div class="absolute -top-12 -right-12 w-32 h-32 hidden lg:block pointer-events-none transform-style-3d group-hover:translate-z-50 transition-all duration-700 opacity-0 group-hover:opacity-100">
                  <span class="text-8xl drop-shadow-[0_20px_20px_rgba(255,20,147,0.4)]">📈</span>
                </div>

                <div class="flex justify-between items-center mb-8">
                  <span class="text-[10px] font-black bg-gradient-to-r from-[#ff69b4] to-[#ff1493] text-white px-5 py-2.5 rounded-xl uppercase tracking-widest shadow-[0_5px_15px_rgba(255,20,147,0.4)] border border-pink-300">
                    Dec 2025 – Apr 2026
                  </span>
                </div>
                
                <h3 class="text-2xl font-black text-gray-800 leading-tight mb-2 font-playfair">IT Administration Project Staff Intern</h3>
                <p class="text-[#ff1493] font-black text-sm mb-8 flex items-center gap-3">
                  <span class="w-8 h-[3px] bg-[#ff69b4] rounded-full shadow-[0_0_5px_#ff69b4]"></span>
                  PT. Solusi Daya Indonesia
                </p>

                <ul class="space-y-5 text-gray-700 text-[14.5px] leading-relaxed font-bold">
                  <li class="flex gap-4 items-start group/list bg-white/50 p-4 rounded-2xl border border-pink-100 hover:bg-white hover:shadow-md transition-all">
                    <span class="text-[#ff1493] font-black transition-transform group-hover/list:translate-x-1 text-lg">✿</span>
                    <span>Managed 30+ monthly client invoices, achieving 100% billing accuracy and improving financial tracking efficiency.</span>
                  </li>
                  <li class="flex gap-4 items-start group/list bg-white/50 p-4 rounded-2xl border border-pink-100 hover:bg-white hover:shadow-md transition-all">
                    <span class="text-[#ff1493] font-black transition-transform group-hover/list:translate-x-1 text-lg">✿</span>
                    <span>Developed interactive dashboards using Power BI from cleaned Excel datasets, enabling cost analysis and improving monitoring accuracy.</span>
                  </li>
                  <li class="flex gap-4 items-start group/list bg-white/50 p-4 rounded-2xl border border-pink-100 hover:bg-white hover:shadow-md transition-all">
                    <span class="text-[#ff1493] font-black transition-transform group-hover/list:translate-x-1 text-lg">✿</span>
                    <span>Created system documentation (Use Case, Activity Diagrams, FRD, flowcharts) and conducted functional & manual testing before deployment.</span>
                  </li>
                  <li class="flex gap-4 items-start group/list bg-white/50 p-4 rounded-2xl border border-pink-100 hover:bg-white hover:shadow-md transition-all">
                    <span class="text-[#ff1493] font-black transition-transform group-hover/list:translate-x-1 text-lg">✿</span>
                    <span>Managed IT service documentation (proposals, SLAs, handover reports), ensuring compliance and structured project governance.</span>
                  </li>
                  <li class="flex gap-4 items-start group/list bg-white/50 p-4 rounded-2xl border border-pink-100 hover:bg-white hover:shadow-md transition-all">
                    <span class="text-[#ff1493] font-black transition-transform group-hover/list:translate-x-1 text-lg">✿</span>
                    <span>Supported procurement workflows (Purchase Requisition, Purchase Order, invoice processing) using ERP Astina
Utilized Odoo for managing IT service requests and asset tracking, supporting daily business operations.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:w-[48%] hidden md:block"></div>
          </div>

          <div class="relative flex flex-col md:flex-row-reverse items-center justify-between group transform-style-3d exp-card mt-16 md:mt-0">
            <!-- Timeline Orb -->
            <div class="absolute left-[-10px] md:left-1/2 md:-translate-x-1/2 top-14 w-12 h-12 bg-gradient-to-br from-[#ffb3d9] to-[#d11276] rounded-full z-20 shadow-[inset_0_4px_8px_rgba(255,255,255,0.6),_0_10px_20px_rgba(209,18,118,0.4)] transition-all duration-500 group-hover:scale-125 border-4 border-white flex items-center justify-center">
              <div class="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            </div>

            <div class="md:w-[48%] w-full pl-12 md:pl-0">
              <div class="card-3d-advanced right glass-pink">
                <div class="absolute -top-12 -left-12 w-32 h-32 hidden lg:block pointer-events-none transform-style-3d group-hover:translate-z-50 transition-all duration-700 opacity-0 group-hover:opacity-100">
                  <span class="text-8xl drop-shadow-[0_20px_20px_rgba(255,20,147,0.4)]">💻</span>
                </div>

                <div class="flex justify-between items-center mb-8">
                  <span class="text-[10px] font-black bg-gradient-to-r from-[#ffb3d9] to-[#d11276] text-white px-5 py-2.5 rounded-xl uppercase tracking-widest shadow-[0_5px_15px_rgba(209,18,118,0.4)] border border-pink-300">
                    Oct 2024 – Dec 2024
                  </span>
                </div>
                
                <h3 class="text-2xl font-black text-gray-800 leading-tight mb-2 font-playfair">Frontend Developer Intern</h3>
                <p class="text-[#d11276] font-black text-sm mb-8 flex items-center gap-3">
                  <span class="w-8 h-[3px] bg-[#ffb3d9] rounded-full shadow-[0_0_5px_#ffb3d9]"></span>
                  Mabes TNI
                </p>

                <ul class="space-y-5 text-gray-700 text-[14.5px] leading-relaxed font-bold">
                  <li class="flex gap-4 items-start group/list bg-white/50 p-4 rounded-2xl border border-pink-100 hover:bg-white hover:shadow-md transition-all">
                    <span class="text-[#d11276] font-black transition-transform group-hover/list:translate-x-1 text-lg">✿</span>
                    <span>Developed responsive user interfaces using HTML, Bootstrap, and JavaScript, improving accessibility across desktop and mobile devices</span>
                  </li>
                  <li class="flex gap-4 items-start group/list bg-white/50 p-4 rounded-2xl border border-pink-100 hover:bg-white hover:shadow-md transition-all">
                    <span class="text-[#d11276] font-black transition-transform group-hover/list:translate-x-1 text-lg">✿</span>
                    <span>Collaborated with UI/UX designers and backend developers to ensure seamless system integration and user experience</span>
                  </li>
                   <li class="flex gap-4 items-start group/list bg-white/50 p-4 rounded-2xl border border-pink-100 hover:bg-white hover:shadow-md transition-all">
                    <span class="text-[#d11276] font-black transition-transform group-hover/list:translate-x-1 text-lg">✿</span>
                    <span>Developed user manual documentation (manual book) for the E-Doktrin system, enabling users to independently operate the system and reducing dependency on technical support</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:w-[48%] hidden md:block"></div>
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

const expRef = ref(null);

onMounted(() => {
  // Title Animation
  gsap.fromTo('.exp-title', 
    { y: 50, opacity: 0 },
    { 
      y: 0, opacity: 1, duration: 1, ease: 'back.out(1.5)',
      scrollTrigger: { trigger: expRef.value, start: 'top 85%' }
    }
  );

  // Timeline Progress Animation
  gsap.to('.timeline-progress', {
    height: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.timeline-line',
      start: 'top 50%',
      end: 'bottom 50%',
      scrub: 1
    }
  });

  // Cards Entrance Animation
  const cards = document.querySelectorAll('.exp-card');
  cards.forEach((card, i) => {
    const isLeft = i % 2 === 0;
    gsap.fromTo(card,
      { x: isLeft ? -100 : 100, opacity: 0, rotateY: isLeft ? -15 : 15 },
      { 
        x: 0, opacity: 1, rotateY: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
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

.perspective-container { perspective: 2500px; }
.transform-style-3d { transform-style: preserve-3d; }

.glass-pink {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8) !important;
}

.card-3d-advanced {
  @apply p-12 rounded-[3.5rem] relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)];
  box-shadow: 20px 20px 60px rgba(255,182,193,0.3), -15px -15px 40px #ffffff;
  transform-style: preserve-3d;
}

@media (min-width: 768px) {
  .card-3d-advanced.left { transform: rotateY(10deg) rotateX(2deg); transform-origin: center right; }
  .card-3d-advanced.right { transform: rotateY(-10deg) rotateX(2deg); transform-origin: center left; }
  
  .group:hover .card-3d-advanced {
    transform: rotateY(0deg) rotateX(0deg) translateZ(60px);
    box-shadow: 40px 50px 80px rgba(255,20,147,0.15), -15px -15px 40px #ffffff;
    border-color: #ffb3d9 !important;
  }
}

.translate-z-50 { transform: translateZ(100px); }

b { @apply text-gray-900 font-black; }

@media (max-width: 767px) {
  .card-3d-advanced { transform: none !important; @apply p-8 rounded-[2.5rem]; }
}
</style>