<template>
  <div class="fixed top-16 left-0 right-0 z-40 bg-white">
    <div class="border-b border-gray-200 bg-gray-50">
      <div class="container mx-auto px-4 h-12">
        <nav class="flex items-center h-full space-x-6">
          <a href="#" class="flex items-center space-x-2 text-sm px-3 py-1.5 rounded-md transition-colors"
             :class="active === 'gallery' ? 'bg-lime-200 text-white' : 'text-gray-600 hover:bg-lime-200 hover:text-white'">
            <img src="/layout-grid.png" alt="Gallery" class="h-5 w-5 object-contain" />
            <span>Gallery</span>
          </a>
          <a href="#" class="flex items-center space-x-2 text-sm px-3 py-1.5 rounded-md transition-colors"
             :class="active === 'maps' ? 'bg-lime-200 text-white' : 'text-gray-600 hover:bg-lime-200 hover:text-white'">
            <img src="/map-pin.png" alt="Maps" class="h-5 w-5 object-contain" />
            <span>Maps</span>
          </a>
          <a href="#" class="flex items-center space-x-2 text-sm px-3 py-1.5 rounded-md transition-colors"
             :class="active === 'feed' ? 'bg-lime-200 text-white' : 'text-gray-600 hover:bg-lime-200 hover:text-white'">
            <img src="/newspaper.png" alt="Feed" class="h-5 w-5 object-contain" />
            <span>Feed</span>
          </a>

          <!-- Search Bar -->
          <div class="ml-auto">
            <div class="relative">
              <input
                type="text"
                placeholder="Search..."
                class="w-64 h-8 pl-3 pr-10 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <button class="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  active: 'gallery' | 'maps' | 'feed'
}>()
</script>


