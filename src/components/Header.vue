<template>
    <header class="absolute inset-x-0 top-0 z-50 py-4 bg-transparent text-gray-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <!-- Logo & Brand -->
        <router-link to="/" class="flex items-center space-x-2">
          <img src="/home/kadri/Codefly/my-vue-app-crodfly/public/logo.png" alt="Crowdfly" class="h-6" />
          <span class="font-bold text-lg text-black">Crowdfly</span>
        </router-link>
  
        <!-- Nav Links -->
        <nav class="hidden md:flex space-x-8">
          <router-link to="/" class="cursor-pointer hover:text-black">Home</router-link>
          <router-link to="/explore" class="cursor-pointer hover:text-black">Explore</router-link>
          <router-link to="/campaigns" class="cursor-pointer hover:text-black">Campaigns</router-link>
          <router-link to="/profile" class="cursor-pointer hover:text-black">Profile</router-link>
        </nav>
  
        <!-- Search & Actions -->
        <div class="flex items-center space-x-4">
          <!-- Search Input -->
          <div class="relative">
            <input
              type="text"
              placeholder="Search"
              class="w-40 md:w-56 lg:w-64 pl-6 pr-2 py-1 rounded-full bg-white bg-opacity-20 placeholder-grey-500 placeholder-opacity-70 border border-gray-500"
            />
            <SearchIcon class="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black opacity-70" />
          </div>
  
          <!-- Add Button -->
          <button aria-label="Add" class="bg-gray-100 ronded-xl p-3">
            <PlusIcon class="h-5 w-5 text-gray-500" />
          </button>
  
          <!-- Avatar -->
        <div class="bg-gray-100 rounded-full p-1 inline-block">
          <img
            src="/home/kadri/Codefly/my-vue-app-crodfly/public/Male_Memojis.png"
            alt="User avatar"
            class="h-8 w-8 rounded-full ring-2 ring-gray-400"
          />
        </div>  
  
          <!-- Settings Button -->
          <button aria-label="Settings" class="p-2 rounded-full bg-white bg-opacity-20">
            <CogIcon class="h-5 w-5 text-black" />
          </button>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { SearchIcon, PlusIcon, CogIcon } from 'lucide-vue-next'
  </script>
  