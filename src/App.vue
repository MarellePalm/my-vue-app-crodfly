<script setup lang="ts">
import Home from './Views/Home.vue';
import About from './Views/About.vue';
import Contact from './Views/Contact.vue';
import Header from './components/Header.vue';
import SubHeader from './components/SubHeader.vue';
import Footer from './components/Footer.vue';
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


