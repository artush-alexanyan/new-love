<template>
  <div class="hero">
    <div class="relative h-screen">
      <div
        class="absolute inset-0 bg-[url('@/assets/images/hero/hero-bg.png')] bg-cover bg-center"
      ></div>
      <div class="absolute inset-0 bg-black bg-opacity-75"></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/25"
      ></div>
      <div class="relative z-10">
        <div
          class="w-[87.5%] mx-auto flex items-center justify-between pt-8 pb-8 border-b border-b-gray-800"
        >
          <div class="left-box w-[115px] h-[38px] rounded-[8px] border bg-white"></div>
          <div class="links">
            <ul class="flex items-center w-full justify-between text-[#ABABAB]">
              <li class="px-3.5"><RouterLink to="/">Main info</RouterLink></li>
              <li class="px-3.5"><RouterLink to="/">About</RouterLink></li>
              <li class="px-3.5"><RouterLink to="/">Main Characters</RouterLink></li>
              <li class="px-3.5"><RouterLink to="/">Community</RouterLink></li>
            </ul>
          </div>
          <div class="right-box">
            <button type="button" class="py-3 px-6 rounded-[30px] border text-white bg-transparent">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
      <div class="absolute left-0 w-full top-0">
        <div class="grid grid-cols-2 place items-center justify-items-center h-screen">
          <div class="hero-text ml-80 text-white">
            <h1 class="text-7xl uppercase text-white font-bebas">
              Love <span class="text-red-500">&</span>
            </h1>
            <h1 class="text-7xl uppercase text-white font-bebas">ambitions</h1>

            <div class="text-right flex items-center justify-end my-2.5">
              <div class="text border-r-2">
                <p class="px-4 text-sm text-[#ABABAB] whitespace-nowrap">
                  Secrets and betrayals in the glittering
                </p>
                <p class="px-6 text-sm text-[#ABABAB] whitespace-nowrap">
                  high stakes of Formula 1 racing.
                </p>
              </div>
              <h1 class="text-5xl uppercase font-bebas ml-4 -mr-8">AT</h1>
            </div>

            <div class="text-right">
              <h1 class="text-5xl font-bebas">Breakneck</h1>
              <div class="flex items-center justify-end w-full space-x-5 my-2.5">
                <button class="py-3 px-6 rounded-[30px] text-white text-base bg-[#D3041C]">
                  Join our Comunity
                </button>
                <h1 class="text-5xl font-bebas">Speed</h1>
              </div>
            </div>
          </div>
          <div class="image_wrapper w-full">
            <img src="@/assets/images/hero/hero-1.png" class="object-contain h-screen ml-20" />
          </div>
        </div>
      </div>
      <div class="absolute left-0 bottom-0">
        <img src="@/assets/images/hero/sparks-left.png" alt="" />
      </div>
      <div class="absolute right-0 bottom-0 border-white">
        <img src="@/assets/images/hero/sparks-right.png" class="h-96" alt="" />
      </div>
      <div class="absolute right-0 bottom-0">
        <img src="@/assets/images/hero/flame.png" alt="" />
      </div>
      <!-- <div class="absolute right-0 -bottom-10">
        <img src="@/assets/images/hero/download.svg" alt="" />
      </div> -->
      <BaseSocial />
    </div>
  </div>
</template>

<script setup>
import BaseSocial from '@/base/BaseSocial.vue'
</script>
