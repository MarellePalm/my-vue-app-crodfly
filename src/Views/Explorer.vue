<script setup lang="ts">
import { Button } from '../components/ui/button'
import  Footer  from '../components/Footer.vue'
import { ArrowDown, ArrowLeft, ArrowUp, MapPinIcon, } from 'lucide-vue-next';
import { ListBulletIcon } from '@heroicons/vue/16/solid';
import ExplorerGrid from '../components/ExplorerGrid.vue';
import Pagination from '../components/ui/pagination/Pagination.vue';
import PaginationContent from '../components/ui/pagination/PaginationContent.vue';
import PaginationEllipsis from '../components/ui/pagination/PaginationEllipsis.vue';
import PaginationItem from '../components/ui/pagination/PaginationItem.vue';
import PaginationPrevious from '../components/ui/pagination/PaginationPrevious.vue';
import PaginationNext from '../components/ui/pagination/PaginationNext.vue';
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
  <div class="p-5">
    <ExplorerGrid></ExplorerGrid>
    
  </div>
  <div>
     <Pagination v-slot="{ page }" :items-per-page="10" :total="100" :default-page="2">
    <PaginationContent v-slot="{ items }">
      <PaginationPrevious />

      <template v-for="(item, index) in items" :key="index">
        <PaginationItem
          v-if="item.type === 'page'"
          :value="item.value"
          :is-active="item.value === page"
        >
          {{ item.value }}
        </PaginationItem>
      </template>

      <PaginationEllipsis :index="4" />

      <PaginationNext />
    </PaginationContent>
  </Pagination>
  </div>
</template>
