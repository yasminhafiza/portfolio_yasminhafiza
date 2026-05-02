<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectModal from '../components/ProjectModal.vue'

gsap.registerPlugin(ScrollTrigger)

const filter = ref('all')
const selectedProject = ref(null)

const filteredProjects = computed(() => {
  if (filter.value === 'all') return projects
  return projects.filter(p => p.type === filter.value)
})

const openModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden' // Kunci scroll
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto' // Aktifkan scroll kembali
}

const updateFilterAndAnimate = async (newFilter) => {
  filter.value = newFilter
  await nextTick()

  gsap.fromTo('.proj-card-wrap',
    { y: 30, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }
  )
}

onMounted(() => {
  gsap.from('.proj-card-wrap', {
    scrollTrigger: {
      trigger: '.grid',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  })
})
</script>

<template>
  <section id="projects" class="py-16 lg:py-24 px-6 max-w-7xl mx-auto font-quicksand">
    
    <div class="text-center mb-16">
      <p class="text-[#ff1493] font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Portfolio Highlights</p>
      <h2 class="text-4xl md:text-6xl font-black text-[#ff1493] tracking-tighter font-playfair">
        My <span class="text-white drop-shadow-[2px_2px_0px_#ff1493]">Projects</span>
      </h2>
    </div>

    <div class="flex flex-wrap justify-center gap-3 mb-16">
      <button
        v-for="t in ['web','Power BI','System Analysis & Design', 'Canva']"
        :key="t"
        @click="updateFilterAndAnimate(t)"
        :class="[
          'px-8 py-2.5 rounded-full border-2 transition-all duration-300 font-bold uppercase text-[10px] tracking-widest',
          filter === t 
            ? 'bg-[#ff1493] border-[#ff1493] text-white shadow-[0_8px_20px_rgba(255,20,147,0.4)] scale-110' 
            : 'bg-white border-pink-100 text-pink-400 hover:border-[#ff1493] hover:text-[#ff1493]'
        ]"
      >
        {{ t }}
      </button>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="p in filteredProjects" 
        :key="p.id" 
        class="proj-card-wrap"
      >
        <ProjectCard 
          :project="p" 
          @click="openModal(p)" 
          class="cursor-pointer transition-transform duration-500 hover:-translate-y-3"
        />
      </div>
    </div>

    <ProjectModal 
      :project="selectedProject" 
      @close="closeModal" 
    />

  </section>
</template>

<style scoped>
.font-playfair { font-family: 'Playfair Display', serif; }
.font-quicksand { font-family: 'Quicksand', sans-serif; }
</style>