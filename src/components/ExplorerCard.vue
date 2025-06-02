<template>
  <div class="rounded-xl shadow bg-white p-4 max-w-sm w-full">
    <img :src="image" class="rounded-xl h-40 w-full object-cover mb-3" />

    <div class="flex items-center space-x-2 mb-1">
      <img src="https://i.pravatar.cc/40" class="h-6 w-6 rounded-full" />
      <p class="text-sm text-gray-700 font-semibold">{{ author }}</p>
    </div>

    <h3 class="font-bold text-md mb-1 truncate">{{ title }}</h3>
    <p class="text-gray-500 text-sm line-clamp-2 mb-3">{{ description }}</p>

    <div class="flex justify-between items-center mb-2">
      <p class="font-bold text-sm">€{{ raised.toLocaleString() }}</p>
      <p class="text-sm">{{ progress }}%</p>
    </div>

    <div class="bg-gray-200 h-2 w-full rounded-full mb-3">
      <div
        class="bg-lime-500 h-2 rounded-full"
        :style="{ width: progress + '%' }"
      ></div>
    </div>

    <div class="flex justify-end space-x-2 text-gray-500">
      <button><i class="fas fa-share-alt"></i></button>
      <button><i class="far fa-heart"></i></button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  author: string;
  title: string;
  description: string;
  raised: number;
  progress: number;
}>();
</script>
