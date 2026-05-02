<script setup>
defineProps({
  project: {
    type: Object,
    default: () => ({
      title: '',
      type: '',
      images: [],
      technologies: []
    })
  }
})

defineEmits(['select'])
</script>

<template>
  <div class="group [perspective:2000px] h-full" @click="$emit('select', project)">
    
    <div class="relative bg-white/80 backdrop-blur-md border border-pink-100 rounded-[2.5rem] p-5 h-full
                transition-all duration-700 cursor-pointer hover:shadow-xl hover:shadow-pink-100/50 
                hover:-translate-y-2 flex flex-col">

      <div class="absolute -top-4 -right-4 bg-white px-4 py-1 rounded-xl text-xs font-bold text-pink-500 shadow-sm border border-pink-50">
        {{ project.type }}
      </div>

      <div class="h-56 w-full overflow-hidden rounded-3xl mb-4 shadow-inner">
        <img 
          :src="project.images?.[0] || 'https://via.placeholder.com/400x300'"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <h3 class="text-xl font-bold text-gray-800 px-1">
        {{ project.title }}
      </h3>

      <div class="flex gap-2 mt-3 flex-wrap px-1">
        <span
          v-for="tech in (project.technologies || []).slice(0,3)"
          :key="tech"
          class="text-[10px] uppercase tracking-wider bg-pink-50 text-pink-500 font-bold px-2 py-1 rounded-lg border border-pink-100"
        >
          {{ tech }}
        </span>

        <span
          v-if="(project.technologies || []).length > 3"
          class="text-xs text-gray-400 self-center font-medium"
        >
          +{{ project.technologies.length - 3 }}
        </span>
      </div>

      <div class="mt-auto pt-5 flex items-center justify-between overflow-hidden">
        <div class="h-[1px] flex-1 bg-pink-50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
        
        <span class="text-[11px] font-black uppercase tracking-[0.2em] text-pink-400 mx-3 
                     opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          Click to view detail
        </span>

        <div class="h-[1px] flex-1 bg-pink-50 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Menambahkan sedikit sentuhan halus saat hover */
.group:hover h3 {
  color: #ff1493;
  transition: color 0.3s ease;
}
</style>