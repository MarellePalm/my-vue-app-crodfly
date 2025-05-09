<script setup lang="ts">
import { Button } from '../components/ui/button'
import  Footer  from '../components/Footer.vue'
import { ArrowDown, ArrowLeft, ArrowUp, MapPinIcon, } from 'lucide-vue-next';
import { ListBulletIcon } from '@heroicons/vue/16/solid';


</script>

<template>
  <div class="flex py-12 px-18">
    <div class="flex flex-row justify-between w-full">
        <div>
            <p class="font-bold ">Explorer</p>
            <p class="text-gray-600">Where do you want to help</p>
        </div>
        <div class=" flex space-x-4">
            <Button class="border font-bold px-3 py-1 rounded"><ArrowUp></ArrowUp>Price</Button>
            <Button class="border font-bold px-3 py-1 rounded"><ArrowDown></ArrowDown>Date</Button>
            <Button class="bg-lime-500 hover:bg-lime-600 font-semibold rounded py-2 px-4 text-white">Show filters</Button>
            
        </div>
    </div>
  </div>

  <div class="flex flex-row justify-between w-full  py-12 px-18">
    <div>
        <Button class="border px-4 py-3 bg-color-white text-color-black">All views</Button>
        <Button class="border px-4 py-3 bg-color-white text-color-black">Petitions</Button>
        <Button class="border px-4 py-3 bg-color-white text-color-black">Donations</Button>
        
    </div>
    <div>
        <Button class="border bg-color-white text-color-black "><ListBulletIcon class="w-5 h-5 mr-2"></ListBulletIcon></Button>
        <Button class="border bg-color-white text-color-black"><MapPinIcon class="w-5 h-5 mr-2"></MapPinIcon></Button>
    </div>
  </div>
</template>
