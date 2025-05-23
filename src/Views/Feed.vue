<script setup lang="ts">
import Header from '../components/Header.vue'
import SubHeader from '../components/SubHeader.vue'
</script>

<template>
  <div>
    <Header />
    <SubHeader active="feed" />
    <main class="container mx-auto px-4 pt-32">
      <h1 class="text-2xl font-bold mb-6">Feed</h1>
      <!-- Add your feed content here -->
    </main>
  </div>
</template> 