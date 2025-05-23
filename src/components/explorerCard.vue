<script setup lang="ts">
import { Progress } from './ui/progress';
import { Button } from '../components/ui/button';
import { ArrowUpTrayIcon, HeartIcon } from '@heroicons/vue/16/solid';
import { Gift } from 'lucide-vue-next';
import Avatar from './ui/avatar/Avatar.vue';
import AvatarImage from './ui/avatar/AvatarImage.vue';

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="border rounded-xl shadow-md flex flex-col gap-2 w-full max-w-sm bg-white">
        
            <div class="relative inline-block">
                <img src="/pictures/MsSaint.png" alt="MsSaint">
                <div class="absolute bottom-2 right-2 flex gap-2">
                    <Button class="border bg-white text-color-black w-8 h-8 "><ArrowUpTrayIcon class="w-5 h-5 mr-2"></ArrowUpTrayIcon></Button>
                    <Button class="flex items-center justify-center border bg-white text-black w-8 h-8"><HeartIcon class="w-5 h-5 mr-2"></HeartIcon></Button>
                </div>
            </div>
            <div class="p-2 flex gap-1 ">
                <Avatar class="w-7 h-7 bg-lime-300 rounded-full overflow-hidden">
                    <AvatarImage src="/public/pictures/avatarImg.png" ></AvatarImage>
                </Avatar>
                <p class="text-gray-800"> Oliver Rhye</p>
            </div>
            <div class="p-2">
                <p class="font-semibold">Ms. Saint-Martin Doranyia Pascal</p>
            </div>
            <div class="p-2 text-sm text-gray-600">
                <p>Hi This is your Miss Teen Carnival 2022 Doranyia Pascal I will be representing Saint Martin...</p>
            </div>
            <div class="p-2">
                <Progress  :model-value="33">
                    <div class="bg-lime-500 h-full rounded-full" :style="{ width: '33%' }"></div>
                </Progress>
                
            </div>
            <div class="flex justify-between items-center p-2">
                <div class="flex items-center">
                    <Gift class="w-5 h-5 mr-2 bg-white"></Gift><p>€8,516.95</p>
                </div>
                <p>50%</p>
            </div>
        </div>
    </div>
</template>