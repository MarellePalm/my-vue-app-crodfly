<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
    <ExplorerCard
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"
    />
  </div>
</template>

<script setup lang="ts">
import ExplorerCard from './ExplorerCard.vue';

const cards = [
  {
    image: '../public/pictures/MsSaint.png',
    author: 'Olivia Rhye',
    title: 'Ms. Saint-Martin Doranyia Pascal',
    description: 'Hi This is your Miss Teen Carnival 2022 Doranyia Pascal...',
    raised: 8516.95,
    progress: 50,
  },
  {
    image: 'https://source.unsplash.com/random/600x400/?community',
    author: 'Olivia Rhye',
    title: 'Educación en Academia de...',
    description: 'Hola, mi nombre es Xhaomi Torres...',
    raised: 9977.32,
    progress: 50,
  },
  {
    image: 'https://source.unsplash.com/random/600x400/?children',
    author: 'Olivia Rhye',
    title: 'Aidez la famille Mimba....',
    description: 'À la mi-septembre, les enfants MIMBA...',
    raised: 8129.86,
    progress: 75,
  },
  {
    image: 'https://source.unsplash.com/random/600x400/?tribe',
    author: 'Olivia Rhye',
    title: 'Huni Kuin Sacred Support',
    description: 'I tend not to speak too much about this work...',
    raised: 5411.79,
    progress: 75,
  },
  {
    image: 'https://source.unsplash.com/random/600x400/?volunteer',
    author: 'Jaylon Aminoff',
    title: 'LET\'S MAKE THE DIY...',
    description: 'I\'m David Perez aka Chino, who started skating...',
    raised: 7490.26,
    progress: 75,
  },
  {
    image: 'https://source.unsplash.com/random/600x400/?solar',
    author: 'Davis Press',
    title: 'Solar project of Bobryk...',
    description: 'In March 2022 the secondary school of Bobryksiy...',
    raised: 3427.64,
    progress: 75,
  },
    {
    image: 'https://source.unsplash.com/random/600x400/?community',
    author: 'Mark Wilson',
    title: 'Neighborhood Watch Program',
    description: 'Creating a safer neighborhood through cooperation.',
    raised: 1250,
    progress: 22,
  },
  {
    image: 'https://source.unsplash.com/random/600x400/?education',
    author: 'Sara Lee',
    title: 'Adult Literacy Classes',
    description: 'Empowering adults through basic education programs.',
    raised: 3300,
    progress: 66,
  },
  {
    image: 'https://source.unsplash.com/random/600x400/?animals',
    author: 'Animal Aid',
    title: 'Pet Shelter Expansion',
    description: 'Building new shelters for abandoned animals.',
    raised: 4700,
    progress: 78,
  },
];
</script>
