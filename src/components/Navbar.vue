<template>
  <nav class="fixed w-full z-[100] top-0 px-6 py-4 pointer-events-none">
    <div class="max-w-7xl mx-auto flex justify-between pointer-events-auto">
      
      <!-- Brand & Name -->
      <a href="#" class="bg-white/60 backdrop-blur-2xl border border-pink-200 shadow-[0_10px_30px_rgba(255,105,180,0.15)] rounded-full px-6 py-3 flex items-center gap-3 transition-all duration-300 hover:bg-white/80 group">
        <div class="w-10 h-10 bg-gradient-to-br from-[#ff69b4] to-[#ff1493] rounded-full flex items-center justify-center text-white font-black text-lg shadow-[0_5px_15px_rgba(255,20,147,0.4)] border-2 border-white group-hover:rotate-[360deg] transition-transform duration-700">
          ✿
        </div>
        <span class="font-black text-[#d11276] tracking-tight hidden sm:block text-xl font-playfair drop-shadow-sm group-hover:text-[#ff1493] transition-colors">
          Yasmin.
        </span>
      </a>

      <!-- Professional Navigation Menu -->
      <div class="hidden md:flex bg-white/60 backdrop-blur-2xl border border-pink-200 shadow-[0_10px_30px_rgba(255,105,180,0.15)] rounded-full px-8 py-3 items-center gap-8 text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300">
        <a href="#about" :class="activeSection === 'about' ? 'text-[#ff1493] scale-110 drop-shadow-sm' : 'text-gray-400 hover:text-pink-400'" class="transition-all duration-300">About</a>
        <a href="#skills" :class="activeSection === 'skills' ? 'text-[#ff1493] scale-110 drop-shadow-sm' : 'text-gray-400 hover:text-pink-400'" class="transition-all duration-300">Skills</a>
        <a href="#experience" :class="activeSection === 'experience' ? 'text-[#ff1493] scale-110 drop-shadow-sm' : 'text-gray-400 hover:text-pink-400'" class="transition-all duration-300">Journey</a>
        <a href="#education" :class="activeSection === 'education' ? 'text-[#ff1493] scale-110 drop-shadow-sm' : 'text-gray-400 hover:text-pink-400'" class="transition-all duration-300">Edu</a>
        <a href="#projects" :class="activeSection === 'projects' ? 'text-[#ff1493] scale-110 drop-shadow-sm' : 'text-gray-400 hover:text-pink-400'" class="transition-all duration-300">Projects</a>
      </div>

      <!-- Job Seeking Core Actions -->
      <div class="bg-white/60 backdrop-blur-2xl border border-pink-200 shadow-[0_10px_30px_rgba(255,105,180,0.15)] rounded-full px-4 py-3 flex items-center gap-4 transition-all duration-300 hover:bg-white/80">
        
        <!-- Quick Social / Pro Link (LinkedIn) -->
        <a href="https://www.linkedin.com/in/yasmin-hafiza-isa-puteri-7477b4185/" target="_blank" class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-sm hidden lg:flex">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>

        <!-- Download CV / Resume 
        <a href="#" download 
           class="hidden sm:block text-[10px] font-black tracking-widest uppercase text-[#d11276] hover:text-[#ff1493] px-2 transition-colors border-r-2 border-pink-200 pr-4">
          Get Resume
        </a> -->

        <!-- Hire Me CTA -->
        <a 
          href="#contact" 
          class="bg-gradient-to-r from-[#ff69b4] to-[#ff1493] text-white px-6 py-2.5 rounded-full text-[10px] tracking-widest uppercase font-black hover:scale-105 transition-all shadow-[0_5px_15px_rgba(255,20,147,0.4)] block border border-pink-300 shrink-0"
        >
          Hire Me ✨
        </a>

        <!-- Mobile Menu Toggle -->
        <button @click="toggleMobileMenu" class="md:hidden flex items-center justify-center text-[#ff1493] hover:text-[#d11276] transition-colors ml-2">
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <!-- Mobile Menu Dropdown -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-show="isMobileMenuOpen" class="absolute top-[120%] right-0 w-[240px] bg-white/90 backdrop-blur-3xl border border-pink-200 rounded-[2rem] p-6 shadow-[0_20px_40px_rgba(255,105,180,0.2)] flex flex-col gap-4 md:hidden pointer-events-auto">
          <a href="#about" @click="closeMobileMenu" :class="activeSection === 'about' ? 'text-[#ff1493] font-black' : 'text-gray-500 font-bold'" class="text-sm tracking-widest uppercase hover:text-pink-400 transition-colors">About</a>
          <a href="#skills" @click="closeMobileMenu" :class="activeSection === 'skills' ? 'text-[#ff1493] font-black' : 'text-gray-500 font-bold'" class="text-sm tracking-widest uppercase hover:text-pink-400 transition-colors">Skills</a>
          <a href="#experience" @click="closeMobileMenu" :class="activeSection === 'experience' ? 'text-[#ff1493] font-black' : 'text-gray-500 font-bold'" class="text-sm tracking-widest uppercase hover:text-pink-400 transition-colors">Journey</a>
          <a href="#education" @click="closeMobileMenu" :class="activeSection === 'education' ? 'text-[#ff1493] font-black' : 'text-gray-500 font-bold'" class="text-sm tracking-widest uppercase hover:text-pink-400 transition-colors">Edu</a>
          <a href="#projects" @click="closeMobileMenu" :class="activeSection === 'projects' ? 'text-[#ff1493] font-black' : 'text-gray-500 font-bold'" class="text-sm tracking-widest uppercase hover:text-pink-400 transition-colors">Projects</a>
          <div class="h-px w-full bg-pink-100 my-2"></div>
          <a href="https://linkedin.com/in/yasmin-haniza" target="_blank" @click="closeMobileMenu" class="text-sm tracking-widest uppercase text-[#1e3a8a] font-bold flex items-center gap-2"><svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> LinkedIn</a>
        </div>
      </Transition>

    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeSection = ref('');
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const checkScroll = () => {
  const sections = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];
  const scrollPosition = window.scrollY + 200; // offset
  
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = id;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  // initial check
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400;1,900&family=Quicksand:wght@500;600;700;800&display=swap');
.font-playfair { font-family: 'Playfair Display', serif; }
</style>