<script setup>
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Experience from '@/components/Experience.vue'
import Education from '@/components/Education.vue'
import Certificates from '@/components/Certificates.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/components/Contact.vue'
</script>

<template>
  <main class="w-full">
    <Hero />

    <div class="relative z-20 max-w-6xl px-6 py-20 mx-auto space-y-32">
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="certificates"><Certificates /></section>
      <section id="projects"><Projects /></section>
    </div>

    <Contact />
  </main>
</template>
