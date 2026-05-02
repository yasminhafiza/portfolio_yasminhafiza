<template>
  <Transition name="modal-fade">
    <div v-if="project" class="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 font-quicksand">
      
      <div class="absolute inset-0 bg-pink-900/40 backdrop-blur-md" @click="$emit('close')"></div>
      
      <div class="bg-white rounded-[2.5rem] md:rounded-[3.5rem] w-full max-w-6xl max-h-[85vh] overflow-hidden relative z-10 shadow-[0_40px_120px_rgba(255,20,147,0.3)] flex flex-col md:flex-row border border-white/50">
        
        <button 
          @click="$emit('close')" 
          class="absolute top-8 right-8 z-[100] w-12 h-12 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center text-[#ff1493] shadow-2xl hover:bg-[#ff1493] hover:text-white transition-all duration-300 border border-pink-100"
        >
          <span class="text-xl font-bold">✕</span>
        </button>

        <div class="md:w-1/2 flex flex-col bg-pink-50/30 border-b md:border-b-0 md:border-r border-pink-100">
          <div class="relative aspect-[4/3] md:aspect-auto md:flex-grow overflow-hidden p-8 flex items-center justify-center">
            <Transition name="slide-fade" mode="out-in">
              <div :key="currentImageIndex" class="w-full h-full flex items-center justify-center">
                <img 
                  :src="currentProjectImages[currentImageIndex]" 
                  :alt="project.title"
                  class="max-w-full max-h-full object-contain rounded-3xl drop-shadow-2xl"
                />
              </div>
            </Transition>
          </div>

          <div v-if="currentProjectImages.length > 1" class="flex justify-center gap-3 py-6 border-t border-pink-100/30">
            <button 
              v-for="(img, index) in currentProjectImages" 
              :key="index"
              @click="currentImageIndex = index"
              :class="[
                'w-2.5 h-2.5 rounded-full transition-all duration-500',
                currentImageIndex === index 
                  ? 'bg-[#ff1493] w-10 shadow-[0_0_15px_rgba(255,20,147,0.4)]' 
                  : 'bg-pink-200 hover:bg-pink-300'
              ]"
            ></button>
          </div>
        </div>

        <div class="md:w-1/2 p-8 md:p-14 overflow-y-auto flex flex-col bg-white">
          <div class="flex-grow pt-4">
            <div class="flex items-center gap-3 mb-5">
              <span class="h-[2px] w-10 bg-[#ff1493]"></span>
              <p class="text-[10px] font-black tracking-[0.4em] text-pink-400 uppercase font-mono">
                {{ project.type }} — {{ project.category }} ✿
              </p>
            </div>

            <h3 class="text-4xl md:text-5xl font-black text-[#ff1493] mb-8 leading-[1.1] tracking-tighter font-playfair">
              {{ project.title }}
            </h3>
            
            <div class="space-y-8">
              <div class="text-gray-700 leading-relaxed font-medium text-base p-6 bg-pink-50/50 rounded-3xl border border-pink-100/50 italic">
                "{{ project.description }}"
              </div>

              <div>
                <p class="text-[11px] font-black tracking-[0.2em] text-gray-400 uppercase mb-4 font-mono">Core Technologies and Skills</p>
                <div class="flex flex-wrap gap-2.5">
                  <span v-for="tech in project.technologies" :key="tech" 
                    class="px-5 py-2 bg-white text-[#ff1493] text-[11px] font-bold rounded-full border border-pink-100 shadow-sm transition-all hover:border-[#ff1493] hover:bg-pink-50">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-12 pt-8 border-t border-pink-50 flex items-center justify-between">
             <div class="text-right">
               <span class="block text-[10px] text-pink-300 font-bold uppercase tracking-widest italic font-mono">Yasmin Portfolio</span>
               <span class="block text-[9px] text-gray-300 uppercase tracking-tighter mt-1">Information Systems Spec.</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  project: Object
})
defineEmits(['close'])

const currentImageIndex = ref(0)

// Normalisasi data gambar (array maupun string tunggal)
const currentProjectImages = computed(() => {
  if (!props.project) return []
  return Array.isArray(props.project.images) ? props.project.images : [props.project.image]
})

// Reset gallery ke gambar pertama setiap ganti proyek
watch(() => props.project, () => {
  currentImageIndex.value = 0
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400;1,900&family=Quicksand:wght@500;600;700&display=swap');

.font-quicksand { font-family: 'Quicksand', sans-serif; }
.font-playfair { font-family: 'Playfair Display', serif; }

/* Transisi Modal: Fade & Pop */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.4s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .bg-white {
  animation: pop-up 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes pop-up {
  0% { transform: scale(0.8) translateY(80px); opacity: 0; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}

/* Transisi Ganti Gambar: Slide Smooth */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from { opacity: 0; transform: scale(0.95) translateX(10px); }
.slide-fade-leave-to { opacity: 0; transform: scale(1.05) translateX(-10px); }

/* Tombol Gaya Game (3D Tactile) */
.btn-game-sm {
  padding: 14px 28px;
  background: white;
  color: #ff1493;
  border: 2px solid #ff1493;
  border-bottom: 5px solid #ff1493;
  border-radius: 16px;
  font-weight: 800;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.1s;
  text-decoration: none;
}
.btn-game-sm:hover {
  background: #fff5f9;
  transform: translateY(1px);
  border-bottom-width: 4px;
}
.btn-game-sm:active {
  transform: translateY(5px);
  border-bottom-width: 0px;
}

/* Custom Scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #ffb3d9;
  border-radius: 10px;
}
</style>