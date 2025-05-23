<script setup lang="ts">
import Header from './components/Header.vue'
import SubHeader from './components/SubHeader.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen">
    <Header />
    <SubHeader active="gallery" />
    <main class="pt-28">
      <router-view />
    </main>
    <Footer />
  </div>
</template>


