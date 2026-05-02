<script setup>
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()
const project = projects.find(p => p.id == route.params.id)
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-20">

    <button onclick="history.back()" class="mb-6 text-pink-400">
      ← Back
    </button>

    <div v-if="project">
      <h1 class="text-3xl font-bold text-pink-400 mb-4">
        {{ project.title }}
      </h1>

      <img :src="project.images[0]" class="rounded-xl mb-6" />

      <p class="text-gray-400 mb-6">
        {{ project.fullDescription }}
      </p>

      <div class="flex gap-2 flex-wrap">
        <span v-for="tech in project.technologies"
              :key="tech"
              class="bg-pink-500/20 px-3 py-1 text-xs rounded">
          {{ tech }}
        </span>
      </div>
    </div>

    <div v-else>
      Project tidak ditemukan
    </div>

  </div>
</template>