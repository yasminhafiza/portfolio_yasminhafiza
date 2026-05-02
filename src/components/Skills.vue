<template>
  <section id="skills" class="py-16 lg:py-24 px-6 overflow-hidden font-quicksand perspective-2000">
    <div class="max-w-7xl mx-auto" ref="skillsRef">
      
      <!-- Header Section -->
      <div class="text-center mb-20 skill-title">
        <h2 class="text-xs font-black tracking-[0.6em] uppercase text-pink-400 mb-3 font-playfair">Personal Capabilities</h2>
        <h3 class="text-4xl md:text-6xl font-playfair font-black text-[#ff1493] tracking-tighter uppercase">
          My <span class="text-white drop-shadow-[2px_2px_0px_#ff1493]">Competencies.</span>
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        
        <!-- Programming & Documentation Card -->
        <div class="md:col-span-2 lg:col-span-8 card-3d bg-white p-6 md:p-10 group skill-card shadow-[0_20px_40px_rgba(255,182,193,0.3)] border-2 border-pink-100">
          <div class="flex items-center gap-5 mb-8">
            <div class="icon-3d bg-pink-50 border-pink-200 text-[#ff1493] text-2xl shadow-[0_5px_15px_rgba(255,105,180,0.3)]">💻</div>
            <div>
              <h4 class="text-2xl font-bold text-gray-800 leading-none">Hard Skills</h4>
              <p class="text-[10px] text-pink-400 font-bold uppercase tracking-widest mt-1">Programming & Documentation</p>
            </div>
          </div>
          
          <!-- Tags Programming -->
          <div class="flex flex-wrap gap-3 mb-10">
            <span v-for="dev in ['JavaScript', 'PHP', 'CodeIgniter', 'Bootstrap', 'Tailwind CSS', 'Vue.js', 'Laravel']" :key="dev"
                  class="tag-soft-3d hover:bg-[#ff1493] hover:text-white transition-all duration-300">
              {{ dev }}
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-pink-100 pt-8">
            <!-- Documentation Sub-section -->
            <div>
              <p class="text-[11px] font-black text-pink-400 uppercase mb-4 font-playfair italic tracking-widest">Analysis & Quality</p>
              <ul class="grid grid-cols-1 gap-2 text-gray-600 text-sm font-bold">
                <li>✿ User Manual & Tech Doc</li>
                <li>✿ System Documentation</li>
                <li>✿ UML & ERD Diagrams</li>
                <li>✿ SDLC Methodologies</li>
                <li class="text-[#ff1493]">✿ Manual Testing</li>
              </ul>
            </div>
            <!-- Database Sub-section -->
            <div>
              <p class="text-[11px] font-black text-pink-400 uppercase mb-4 font-playfair italic tracking-widest">Database System</p>
              <div class="flex flex-wrap gap-3 text-gray-700 font-bold text-sm">
                <span class="px-3 py-1 bg-pink-50 border border-pink-200 rounded-lg shadow-sm">SQL</span>
                <span class="px-3 py-1 bg-pink-50 border border-pink-200 rounded-lg shadow-sm">MySQL</span>
                <span class="px-3 py-1 bg-pink-50 border border-pink-200 rounded-lg shadow-sm">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Soft Skills Card -->
        <div class="md:col-span-2 lg:col-span-4 card-3d bg-gradient-to-br from-[#ff69b4] to-[#ff1493] p-6 md:p-10 group text-white skill-card shadow-[0_20px_50px_rgba(255,20,147,0.4)] relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/20 blur-2xl rounded-full"></div>
          <div class="flex items-center gap-5 mb-8 relative z-10">
            <div class="icon-3d bg-white/30 text-white border-white/50 text-2xl shadow-[0_5px_15px_rgba(255,255,255,0.3)] backdrop-blur-md">✨</div>
            <h4 class="text-2xl font-bold tracking-tight">Soft Skills</h4>
          </div>
          <ul class="space-y-4 font-bold relative z-10 text-[15px]">
            <li v-for="soft in ['Communication', 'Adaptability', 'Time Management', 'Collaboration & Teamwork', 'Coordination', 'Problem Solving', 'Willingness to Learn']" 
                :key="soft" class="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
              <span class="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"></span> {{ soft }}
            </li>
          </ul>
        </div>

        <!-- Tools Mastery Card -->
        <div class="md:col-span-2 lg:col-span-5 card-3d bg-white p-6 md:p-8 group skill-card shadow-[0_20px_40px_rgba(255,182,193,0.3)] border-2 border-pink-100">
          <div class="flex items-center gap-4 mb-8">
            <div class="icon-3d bg-[#ffeaf1] text-[#ff1493] border-pink-200 text-xl shadow-[0_5px_15px_rgba(255,105,180,0.2)]">🛠️</div>
            <h4 class="text-xl font-bold text-gray-800">Tools Mastery</h4>
          </div>
          <div class="space-y-6">
            <div v-for="tool in [
              {name: 'VS Code, Figma & Draw.io', val: '92', from: 'from-[#ff69b4]', to: 'to-[#ff1493]'},
              {name: 'Power BI & Data', val: '75', from: 'from-[#ffb3d9]', to: 'to-[#ff69b4]'},
              {name: 'MS Office Suite', val: '95', from: 'from-[#ffa3c8]', to: 'to-[#d11276]'},
              {name: 'Trello & Management', val: '85', from: 'from-[#ff85c2]', to: 'to-[#ff1493]'}
            ]" :key="tool.name" class="space-y-2">
              <div class="flex justify-between text-[11px] font-black text-gray-600 uppercase tracking-tighter">
                <span>{{ tool.name }}</span>
                <span class="text-[#ff1493] drop-shadow-sm">{{ tool.val }}%</span>
              </div>
              <div class="progress-container">
                <div :class="['progress-bar bg-gradient-to-r', tool.from, tool.to]" :data-width="tool.val" style="width: 0%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- ERP Systems Card -->
        <div class="md:col-span-1 lg:col-span-4 card-3d bg-white p-6 md:p-8 skill-card shadow-[0_20px_40px_rgba(255,182,193,0.3)] border-2 border-pink-100">
          <div class="flex items-center gap-4 mb-6">
            <div class="icon-3d bg-[#ffeaf1] text-[#ff1493] border-pink-200 text-xl shadow-[0_5px_15px_rgba(255,105,180,0.2)]">🏢</div>
            <h4 class="text-xl font-bold text-gray-800">ERP Systems</h4>
          </div>
          <div class="space-y-4">
            <div v-for="erp in ['ERP Adempiere', 'ERP Astina', 'Odoo']" :key="erp"
                 class="p-4 rounded-2xl bg-pink-50 border border-pink-200 flex items-center justify-between group/erp hover:bg-pink-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <span class="font-bold text-[#d11276] text-sm">{{ erp }}</span>
              <span class="text-[10px] bg-white px-2 py-1 rounded-lg border border-pink-100 text-[#ff1493] font-black uppercase shadow-sm">Proficient</span>
            </div>
          </div>
        </div>

        <!-- Languages Card -->
        <div class="md:col-span-1 lg:col-span-3 card-3d bg-white p-6 md:p-8 group skill-card shadow-[0_20px_40px_rgba(255,182,193,0.3)] border-2 border-pink-100">
          <div class="flex items-center gap-4 mb-8">
            <div class="icon-3d bg-[#ffeaf1] text-[#ff1493] border-pink-200 text-xl shadow-[0_5px_15px_rgba(255,105,180,0.2)]">🌍</div>
            <h4 class="text-xl font-bold text-gray-800">Languages</h4>
          </div>
          <div class="space-y-8">
            <div class="relative">
              <div class="flex justify-between mb-2">
                <span class="text-sm font-bold text-gray-700">Indonesia</span>
                <span class="text-[10px] font-black text-[#ff1493]">NATIVE</span>
              </div>
              <div class="h-2.5 w-full bg-pink-50 rounded-full shadow-inner border border-pink-100">
                <div class="h-full bg-gradient-to-r from-[#ff69b4] to-[#ff1493] rounded-full progress-bar shadow-[0_0_10px_rgba(255,20,147,0.5)]" data-width="100" style="width: 0%"></div>
              </div>
            </div>
            <div class="relative">
              <div class="flex justify-between mb-2">
                <span class="text-sm font-bold text-gray-700">English</span>
                <span class="text-[10px] font-black text-[#ff69b4]">INTERMEDIATE</span>
              </div>
              <div class="h-2.5 w-full bg-pink-50 rounded-full shadow-inner border border-pink-100">
                <div class="h-full bg-gradient-to-r from-[#ffb3d9] to-[#ff69b4] rounded-full progress-bar shadow-[0_0_10px_rgba(255,105,180,0.5)]" data-width="70" style="width: 0%"></div>
              </div>
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

const skillsRef = ref(null);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: skillsRef.value,
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none reverse'
    }
  });

  tl.fromTo('.skill-title', 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' }
  );

  tl.fromTo('.skill-card', 
    { y: 100, opacity: 0, rotateX: 15 }, 
    { 
      y: 0, opacity: 1, rotateX: 0, 
      stagger: 0.1, duration: 1, 
      ease: 'power3.out',
      onComplete: () => {
        document.querySelectorAll('.progress-bar').forEach(bar => {
          gsap.to(bar, { width: bar.getAttribute('data-width') + '%', duration: 1.5, ease: 'power2.out' });
        });
      }
    },
    '-=0.5'
  );
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400;1,900&family=Quicksand:wght@500;600;700;800&display=swap');

.font-quicksand { font-family: 'Quicksand', sans-serif; }
.font-playfair { font-family: 'Playfair Display', serif; }

.card-3d {
  @apply rounded-[2.5rem] transition-all duration-500 ease-out;
  transform-style: preserve-3d;
}

.card-3d:hover {
  @apply -translate-y-3;
  box-shadow: 0 40px 60px rgba(255,105,180,0.2) !important;
}

.icon-3d {
  @apply w-12 h-12 flex items-center justify-center rounded-2xl border shrink-0 font-bold;
}

.tag-soft-3d {
  @apply px-4 py-2 bg-pink-50 text-[#ff1493] text-[11px] font-black rounded-xl border border-pink-200 shadow-[0_4px_10px_rgba(255,182,193,0.3)] cursor-default;
}

.progress-container {
  @apply h-2.5 w-full bg-pink-50 rounded-full p-[1px] shadow-inner border border-pink-100 overflow-hidden;
}

.progress-bar {
  @apply h-full rounded-full transition-all duration-700 ease-in-out;
}
</style>