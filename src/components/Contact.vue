<template>
  <section id="contact" class="py-32 relative overflow-hidden font-quicksand perspective-container">
    
    <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#ffb3d9]/40 rounded-full blur-[100px] z-0 animate-pulse-slow"></div>
    <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff69b4]/20 rounded-full blur-[120px] z-0 animate-pulse-slow" style="animation-delay: 2s"></div>

    <div class="container mx-auto px-6 relative z-10" ref="contactRef">
      <div class="text-center mb-20 contact-title transform-style-3d">
        <span class="text-[11px] font-black tracking-[0.6em] uppercase text-pink-400 font-playfair bg-white/50 backdrop-blur-md px-6 py-2 rounded-full border border-pink-200 inline-block mb-6 shadow-sm" style="transform: translateZ(20px);">Connect With Me</span>
        <h2 class="text-5xl md:text-7xl font-black text-[#d11276] font-playfair uppercase drop-shadow-sm" style="transform: translateZ(40px);">
          Let's Create <br class="md:hidden" /><span class="text-[#ff1493] drop-shadow-[2px_2px_0px_#fff]">Magic. ✨</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        
        <a href="https://wa.me/6291510292719" target="_blank" 
           class="group contact-card relative bg-white/80 backdrop-blur-xl border border-pink-100 p-8 rounded-[3rem] text-center transition-all duration-700 ease-out hover:bg-white [transform-style:preserve-3d] hover:[transform:translateZ(30px)_scale(1.05)] shadow-[0_20px_40px_rgba(255,182,193,0.1)] hover:shadow-[0_40px_80px_rgba(255,105,180,0.25)] hover:border-pink-300">
          <div class="w-16 h-16 bg-gradient-to-br from-[#ff69b4] to-[#ff1493] rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg border-2 border-white [transform:translateZ(20px)]">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.554 4.197 1.605 6.04L0 24l6.117-1.605a11.778 11.778 0 005.925 1.597h.005c6.635 0 12.032-5.395 12.035-12.032a11.763 11.763 0 00-3.522-8.51z"/>
            </svg>
          </div>
          <h3 class="text-xl font-black text-gray-800 mb-2 font-playfair [transform:translateZ(10px)]">WhatsApp</h3>
          <p class="text-gray-500 font-bold text-[13px] mb-6 [transform:translateZ(5px)]">Quick questions or project chats.</p>
          <span class="inline-block bg-pink-50 text-[#ff1493] font-black text-[9px] tracking-widest px-4 py-2 rounded-xl uppercase shadow-sm group-hover:bg-[#ff1493] group-hover:text-white transition-colors [transform:translateZ(15px)]">Chat Now →</span>
        </a>

        <a href="https://www.linkedin.com/in/yasmin-hafiza-isa-puteri-7477b4185/" target="_blank" 
           class="group contact-card relative bg-white/80 backdrop-blur-xl border border-pink-100 p-8 rounded-[3rem] text-center transition-all duration-700 ease-out hover:bg-white [transform-style:preserve-3d] hover:[transform:translateZ(30px)_scale(1.05)] shadow-[0_20px_40px_rgba(255,182,193,0.1)] hover:shadow-[0_40px_80px_rgba(255,105,180,0.25)] hover:border-pink-300">
          <div class="w-16 h-16 bg-gradient-to-br from-[#ffb3d9] to-[#d11276] rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-lg border-2 border-white [transform:translateZ(20px)]">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </div>
          <h3 class="text-xl font-black text-gray-800 mb-2 font-playfair [transform:translateZ(10px)]">LinkedIn</h3>
          <p class="text-gray-500 font-bold text-[13px] mb-6 [transform:translateZ(5px)]">Let's connect professionally.</p>
          <span class="inline-block bg-pink-50 text-[#ff1493] font-black text-[9px] tracking-widest px-4 py-2 rounded-xl uppercase shadow-sm group-hover:bg-[#d11276] group-hover:text-white transition-colors [transform:translateZ(15px)]">Visit Profile →</span>
        </a>

        <a href="https://github.com/yasminhafiza" target="_blank" 
           class="group contact-card relative bg-white/80 backdrop-blur-xl border border-pink-100 p-8 rounded-[3rem] text-center transition-all duration-700 ease-out hover:bg-white [transform-style:preserve-3d] hover:[transform:translateZ(30px)_scale(1.05)] shadow-[0_20px_40px_rgba(255,182,193,0.1)] hover:shadow-[0_40px_80px_rgba(255,105,180,0.25)] hover:border-pink-300">
          <div class="w-16 h-16 bg-gradient-to-br from-[#4b0082] to-[#ff1493] rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg border-2 border-white [transform:translateZ(20px)]">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </div>
          <h3 class="text-xl font-black text-gray-800 mb-2 font-playfair [transform:translateZ(10px)]">GitHub</h3>
          <p class="text-gray-500 font-bold text-[13px] mb-6 [transform:translateZ(5px)]">Explore my open-source projects.</p>
          <span class="inline-block bg-pink-50 text-[#ff1493] font-black text-[9px] tracking-widest px-4 py-2 rounded-xl uppercase shadow-sm group-hover:bg-[#4b0082] group-hover:text-white transition-colors [transform:translateZ(15px)]">Check Repos →</span>
        </a>

        <div class="group contact-card relative bg-white/80 backdrop-blur-xl border border-pink-100 p-8 rounded-[3rem] text-center transition-all duration-700 ease-out hover:bg-white [transform-style:preserve-3d] hover:[transform:translateZ(30px)_scale(1.05)] shadow-[0_20px_40px_rgba(255,182,193,0.1)] hover:shadow-[0_40px_80px_rgba(255,105,180,0.25)] hover:border-pink-300">
          <div class="w-16 h-16 bg-gradient-to-br from-[#ffeaf1] to-[#ff69b4] rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg border-2 border-white [transform:translateZ(20px)]">
            <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-black text-gray-800 mb-2 font-playfair [transform:translateZ(10px)]">Email</h3>
          <p class="text-gray-500 font-bold text-[13px] mb-6 [transform:translateZ(5px)] truncate px-2">yasminhafiza13@gmail.com</p>
          <button @click="copyEmail" 
                  class="bg-pink-50 text-[#ff1493] px-4 py-2 rounded-xl text-[9px] tracking-widest font-black uppercase shadow-sm border border-pink-100 hover:bg-[#ff1493] hover:text-white transition-colors [transform:translateZ(15px)] outline-none">
            {{ copied ? 'Copied! ✨' : 'Copy Email' }}
          </button>
        </div>

      </div>

      <div class="text-center mt-28 mb-10">
        <div class="inline-block bg-white/60 backdrop-blur-md px-8 py-3 rounded-2xl border border-pink-100 shadow-[0_10px_20px_rgba(255,182,193,0.2)]">
          <p class="text-[#ff1493] text-[10px] font-black tracking-widest uppercase">
            MADE WITH ❤️ BY <span class="text-[#d11276]">YASMIN HAFIZA ISA PUTERI</span> • 2026
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const copied = ref(false);
const contactRef = ref(null);

const copyEmail = () => {
  navigator.clipboard.writeText('yasminhafiza13@gmail.com');
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};

onMounted(() => {
  gsap.fromTo('.contact-title',
    { y: 30, opacity: 0, scale: 0.9 },
    { 
      y: 0, opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.5)',
      scrollTrigger: { trigger: contactRef.value, start: 'top 85%' }
    }
  );

  const cards = gsap.utils.toArray('.contact-card');
  gsap.fromTo(cards,
    { y: 100, opacity: 0, rotateX: 20 },
    { 
      y: 0, opacity: 1, rotateX: 0, 
      stagger: 0.15, duration: 1, ease: 'power4.out',
      scrollTrigger: {
        trigger: contactRef.value,
        start: 'top 75%'
      }
    }
  );
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400;1,900&family=Quicksand:wght@500;600;700;800&display=swap');

.font-quicksand { font-family: 'Quicksand', sans-serif; }
.font-playfair { font-family: 'Playfair Display', serif; }

.perspective-container { perspective: 2000px; }
.transform-style-3d { transform-style: preserve-3d; }

@keyframes pulse-slow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}
.animate-pulse-slow { animation: pulse-slow 8s infinite alternate ease-in-out; }
</style>