<script setup>
import Navbar from './components/Navbar.vue'
import Background3D from './components/Background3D.vue'
</script>

<template>
  <div class="relative min-h-screen font-sans text-gray-900 bg-transparent">
    <div class="fixed inset-0 z-0">
      <Background3D />
    </div>
    
    <div class="relative z-50">
      <Navbar />
    </div>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <div class="relative z-10">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </div>
</template>

<style>
/* Reset dasar agar scroll smooth */
html {
  scroll-behavior: smooth;
  background-color: #fff0f5; /* Fallback warna pink muda */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>