<template>
  <section id="certificates" class="py-16 lg:py-24 px-6 overflow-hidden font-quicksand perspective-container relative">
    
    <!-- Background Decoration -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-pink-100/40 rounded-full blur-3xl z-0 pointer-events-none"></div>
    <div class="absolute bottom-20 left-10 w-80 h-80 bg-[#ffb3d9]/20 rounded-full blur-3xl z-0 pointer-events-none"></div>

    <div class="max-w-6xl mx-auto relative z-10" ref="certRef">
      
      <!-- Header Section -->
      <div class="text-center mb-20 relative transform-style-3d cert-title">
        <h2 class="text-[11px] font-black tracking-[0.8em] uppercase text-pink-400 mb-4 font-playfair" style="transform: translateZ(20px);">Achievements</h2>
        <h3 class="text-4xl md:text-6xl font-playfair font-black text-[#ff1493] tracking-tighter uppercase leading-none" style="transform: translateZ(50px);">
          Licenses & <span class="text-white drop-shadow-[2px_2px_0px_#ff1493]">Certifications.</span>
        </h3>
        <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-gradient-to-r from-transparent via-[#ff1493] to-transparent rounded-full shadow-[0_0_10px_#ff1493]" style="transform: translateZ(10px);"></div>
      </div>

      <!-- Certificate Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="group transform-style-3d cert-card" v-for="(cert, index) in certificates" :key="index">
          <div class="card-3d-cute border-t-4 border-t-[#ff1493] h-full flex flex-col justify-between">
            <div>
              <div class="w-14 h-14 bg-gradient-to-br from-pink-100 to-white rounded-2xl flex items-center justify-center mb-6 shadow-md border border-pink-200 transform group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-500">
                <span class="text-2xl drop-shadow-sm">{{ cert.icon }}</span>
              </div>
              
              <h3 class="text-xl font-black text-[#d11276] leading-snug font-playfair mb-2">{{ cert.title }}</h3>
              <p class="text-gray-600 font-bold text-sm mb-4">{{ cert.issuer }}</p>
            </div>
            
            <div>
              <div class="inline-block bg-pink-50 border border-pink-200 px-4 py-1.5 rounded-lg mb-4">
                <p class="text-[#ff1493] font-black text-xs tracking-wider uppercase">{{ cert.date }}</p>
              </div>
              <button 
                @click="openModal(cert)"
                class="flex items-center gap-2 text-sm font-bold text-pink-400 hover:text-[#ff1493] transition-colors group/btn w-full"
              >
                View Certificate Detail
                <span class="transform group-hover/btn:translate-x-1 transition-transform">🔍</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal System -->
    <Teleport to="body">
      <Transition @enter="animateModalIn" @leave="animateModalOut">
        <div v-if="selectedCert" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-[#ff1493]/20 backdrop-blur-md" @click="closeModal"></div>
          
          <!-- Modal Main Box -->
          <div class="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-5xl h-auto max-h-[90vh] flex flex-col overflow-hidden relative z-10 border-4 border-white modal-box">
            
            <!-- Close Button -->
            <button @click="closeModal" class="absolute top-4 right-4 z-[60] bg-white/90 hover:bg-pink-500 hover:text-white text-pink-500 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg">
              ✕
            </button>

            <div class="flex flex-col md:flex-row h-full overflow-hidden">
              
              <!-- LEFT: Slider Section with Zoom -->
              <div class="w-full md:w-2/3 bg-pink-50 relative group/slider h-[50vh] md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-pink-100">
                
                <!-- Zoom Controls -->
                <div class="absolute top-4 left-4 z-[60] flex items-center gap-2 bg-white/80 backdrop-blur-md p-1.5 rounded-2xl border border-pink-100 shadow-sm">
                  <button @click="zoomOut" class="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-pink-100 text-[#ff1493] transition-colors font-bold">—</button>
                  <span class="text-[10px] font-black text-pink-500 w-10 text-center">{{ Math.round(zoomLevel * 100) }}%</span>
                  <button @click="zoomIn" class="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-pink-100 text-[#ff1493] transition-colors font-bold">+</button>
                  <div class="w-[1px] h-4 bg-pink-200 mx-1"></div>
                  <button @click="resetZoom" class="px-3 py-1 text-[9px] font-black uppercase tracking-tighter hover:text-pink-600">Reset</button>
                </div>

                <!-- Scroll Container (Horizontal) -->
                <div class="flex h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth">
                  <div 
                    v-for="(img, i) in selectedCert.images" 
                    :key="i" 
                    class="min-w-full h-full snap-center flex items-center justify-center p-6 lg:p-10 overflow-auto"
                  >
                    <div class="relative transition-transform duration-300 ease-out" :style="{ transform: `scale(${zoomLevel})` }">
                      <img 
                        :src="img" 
                        :alt="selectedCert.title" 
                        class="max-w-full max-h-[35vh] md:max-h-[65vh] object-contain rounded-xl shadow-2xl border border-pink-100 bg-white"
                        :class="zoomLevel > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'"
                      >
                    </div>
                  </div>
                </div>

                <!-- Page Indicator -->
                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-pink-100 z-50">
                   <p class="text-[10px] font-black text-[#ff1493] uppercase tracking-widest">
                     Page {{ selectedCert.images.length > 1 ? 'Slider' : '1 of 1' }}
                   </p>
                </div>

                <!-- Floating Navigation Hint (Arrows) -->
                <div v-if="selectedCert.images.length > 1 && zoomLevel === 1" class="absolute inset-y-0 left-0 right-0 pointer-events-none flex justify-between px-4 items-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                   <div class="bg-white/80 w-8 h-8 rounded-full flex items-center justify-center text-pink-400 shadow-sm">⇠</div>
                   <div class="bg-white/80 w-8 h-8 rounded-full flex items-center justify-center text-pink-400 shadow-sm">⇢</div>
                </div>
              </div>
              
              <!-- RIGHT: Details Section -->
              <div class="w-full md:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-white overflow-y-auto">
                <span class="text-pink-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block">{{ selectedCert.issuer }}</span>
                <h2 class="text-2xl lg:text-3xl font-black text-[#ff1493] font-playfair mb-5 leading-tight">
                  {{ selectedCert.title }}
                </h2>
                <div class="h-1.5 w-16 bg-gradient-to-r from-[#ff1493] to-pink-100 rounded-full mb-8"></div>
                
                <div class="space-y-6">
                  <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Issued Date</span>
                    <span class="text-sm font-bold text-gray-700">{{ selectedCert.date }}</span>
                  </div>
                  
                  <div class="p-4 bg-pink-50 rounded-2xl border border-pink-100">
                    <p class="text-gray-500 text-xs font-semibold leading-relaxed italic">
                        This certification validates professional expertise in {{ selectedCert.title.toLowerCase() }}.
                    </p>
                  </div>

                  <p v-if="selectedCert.images.length > 1" class="text-[11px] font-bold text-pink-400 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping"></span>
                    Transcript available (Swipe image)
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certRef = ref(null);
const selectedCert = ref(null);
const zoomLevel = ref(1);

// Helper untuk path gambar sertifikat
const cert = (path) => new URL(`../assets/certificates/${path}`, import.meta.url).href

// Zoom Logic
const zoomIn = () => {
  if (zoomLevel.value < 2.5) zoomLevel.value += 0.25;
};

const zoomOut = () => {
  if (zoomLevel.value > 0.5) zoomLevel.value -= 0.25;
};

const resetZoom = () => {
  zoomLevel.value = 1;
};

const certificates = [
  {
    title: "Business Analysis & Process Management",
    issuer: "Coursera",
    date: "January 2026",
    icon: "📊",
    images: [cert('BA.png')],
  },
  {
    title: "Desktop BYOD Support Supervisor",
    issuer: "BNSP (LSP Telematika)",
    date: "September 2025",
    icon: "🛡️",
    images: [
      cert('BNSP1.png'),
      cert('BNSP2.png')
    ],
  },
  {
    title: "Bangkit Academy - Cloud Computing",
    issuer: "Google, Tokopedia, Gojek, & Traveloka",
    date: "June 2024",
    icon: "☁️",
    images: [cert('bangkit .jpg')],
  },
  {
    title: "ADempiere FOR Intermediate",
    issuer: "Lepkom Gunadarma",
    date: "February 2024",
    icon: "⚙️",
    images: [cert('AD1.jpg'), cert('AD.jpg')]
  },
  {
    title: "Manajemen Layanan IT",
    issuer: "Universitas Gunadarma",
    date: "September 2024",
    icon: "⚙️",
    images: [cert('MLTI1.jpg'), cert('MLTI2.jpg')],
  },
];

const openModal = (cert) => {
  selectedCert.value = cert;
  zoomLevel.value = 1;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedCert.value = null;
  document.body.style.overflow = 'auto';
};

// GSAP Modal Animations
const animateModalIn = (el, done) => {
  const modalBox = el.querySelector('.modal-box');
  const backdrop = el.querySelector('.absolute');
  gsap.set(backdrop, { opacity: 0 });
  gsap.set(modalBox, { scale: 0.9, opacity: 0, y: 40 });

  const tl = gsap.timeline({ onComplete: done });
  tl.to(backdrop, { opacity: 1, duration: 0.4 })
    .to(modalBox, { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'power4.out' }, "-=0.2");
};

const animateModalOut = (el, done) => {
  const modalBox = el.querySelector('.modal-box');
  const backdrop = el.querySelector('.absolute');

  const tl = gsap.timeline({ onComplete: done });
  tl.to(modalBox, { scale: 0.9, opacity: 0, y: 20, duration: 0.3 })
    .to(backdrop, { opacity: 0, duration: 0.3 }, "-=0.1");
};

onMounted(() => {
  gsap.fromTo('.cert-title',
    { y: -40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: certRef.value, start: 'top 85%' } }
  );

  gsap.fromTo('.cert-card',
    { y: 60, opacity: 0, rotateX: -10 },
    { 
      y: 0, opacity: 1, rotateX: 0,
      stagger: 0.15, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: certRef.value, start: 'top 75%' }
    }
  );
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,900&family=Quicksand:wght@500;700;800&display=swap');

.font-quicksand { font-family: 'Quicksand', sans-serif; }
.font-playfair { font-family: 'Playfair Display', serif; }

.perspective-container { perspective: 2000px; }
.transform-style-3d { transform-style: preserve-3d; }

.card-3d-cute {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  @apply p-8 rounded-[2.5rem] transition-all duration-700 shadow-xl border border-white relative;
  transform: rotateX(2deg) rotateY(-1deg);
}

.group:hover .card-3d-cute {
  transform: translateZ(30px) rotateX(0) rotateY(0);
  @apply shadow-2xl;
  box-shadow: 0 30px 60px rgba(255,105,180,0.15);
}

.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.overflow-auto::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.overflow-auto::-webkit-scrollbar-thumb {
  background: #ffb3d9;
  border-radius: 10px;
}
</style>