<script setup lang="ts">
// Header component (previously TopBar)
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
    <div class="border-b border-gray-200">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-8">
          <a href="/" class="flex items-center">
            <img src="/Logo.png" alt="Crowdfly" class="h-8 w-auto" />
          </a>

          <!-- Main Navigation -->
          <nav class="hidden md:flex space-x-6">
            <a href="/home" class="text-gray-400 hover:text-gray-600 text-sm font-medium">Home</a>
            <a href="/explore" class="text-gray-400 hover:text-gray-600 text-sm font-medium">Explore</a>
            <a href="/campaigns" class="text-gray-400 hover:text-gray-600 text-sm font-medium">Campaigns</a>
            <a href="/profile" class="text-gray-400 hover:text-gray-600 text-sm font-medium">Profile</a>
          </nav>
        </div>

        <!-- Right Side Actions -->
        <div class="flex items-center gap-3">
          <button class="w-12 h-12 flex items-center justify-center bg-gray-50/50 hover:bg-gray-100/50 rounded-2xl transition-colors">
            <img src="/plus-circle.png" alt="Add" class="h-6 w-6 object-contain opacity-60" />
          </button>
          <button class="w-12 h-12 flex items-center justify-center bg-gray-50/50 hover:bg-gray-100/50 rounded-full transition-colors">
            <img src="/Male_Memojis.png" alt="Profile" class="h-8 w-8 object-cover rounded-full" />
          </button>
          <button class="w-12 h-12 flex items-center justify-center bg-gray-50/50 hover:bg-gray-100/50 rounded-2xl transition-colors">
            <img src="/settings-logo.png" alt="Settings" class="h-6 w-6 object-contain opacity-60" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

