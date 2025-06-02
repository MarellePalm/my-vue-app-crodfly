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
    description: 'Hi This is your Miss Teen Carnival 2022 Doranyia Pascal I will be representing Saint Martin...',
    raised: 8516.95,
    progress: 50,
  },
  {
    image: '../public/pictures/EducacionenAcademia.png',
    author: 'Olivia Rhye',
    title: 'Educación en Academia de...',
    description: 'Hola, mi nombre es Xhaomi Torres soy la madre de Joseph Y. Christian Torres. Joseph es...',
    raised: 9977.32,
    progress: 50,
  },
  {
    image: '../public/pictures/AidezlaFamille.png',
    author: 'Olivia Rhye',
    title: 'Aidez la famille Mimba....',
    description: 'À la mi-septembre, les enfants MIMBA ont été profondément affectés par la...',
    raised: 8129.86,
    progress: 75,
  },
  {
    image: '../public/pictures/HuniKuinSacred.png',
    author: 'Olivia Rhye',
    title: 'Huni Kuin Sacred Support',
    description: 'I tend not to speak too much about this work, perhaps it is to be experienced and not to be explained.',
    raised: 5411.79,
    progress: 75,
  },
  {
    image: '../public/pictures/letsmakethe.png',
    author: 'Jaylon Aminoff',
    title: 'LET\'S MAKE THE DIY...',
    description: 'I\'m David Perez aka Chino, who started skating this spot some years ago with my...',
    raised: 7490.26,
    progress: 75,
  },
  {
    image: '../public/pictures/solarProject.png',
    author: 'Davis Press',
    title: 'Solar project of Bobryk...',
    description: 'In March 2022 the secondary school of Bobrytskiy Lyceum of Kyiv Region...',
    raised: 3427.64,
    progress: 75,
  },
    {
    image: '../public/pictures/ourAnimalsNeed.png',
    author: 'Omar Franci',
    title: 'Our animals need...',
    description: 'For the last 6 years we are saving and collecting animals from different farms...',
    raised: 6691.26,
    progress: 75,
  },
  {
    image: '../public/pictures/MiniOvenfor.png',
    author: 'Jakob Septimus',
    title: 'Mini-Oven for pick-a-pão',
    description: 'I would like nothing more than to continue baking bread for you, to be able to ...',
    raised: 9184.17,
    progress: 75,
  },
  {
    image: '../public/pictures/StreetartStamping.png',
    author: 'Adison Gouse',
    title: 'Streetart stamping for...',
    description: 'In the spirit of generosity and compassion, a charitable organization tirelessly...',
    raised: 3182.49,
    progress: 75,
  },
  {
    image:'../public/pictures/ebracingHumanity.png',
    author:'Emery Dias',
    title: 'Embracing Humanity...',
    description:'Charitable endeavors blossom like flowers of goodwill, as individuals and communities...',
    raised: 8207.41,
    progress: 75,
  },
];
</script>
