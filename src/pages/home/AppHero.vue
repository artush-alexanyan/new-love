<template>
  <div class="hero">
    <div class="relative h-screen">
      <img src="@/assets/images/hero/image1.png" alt="" />
      <img src="@/assets/images/hero/image-2.png" alt="" />
      <!-- NAVBAR -->
      <div class="absolute top-0 left-0 w-full z-10">
        <div
          class="w-[87.5%] mx-auto flex items-center justify-between pt-8 pb-8 border-b border-b-gray-800"
        >
          <div class="logo w-[115px] h-[38px] rounded-[8px] border bg-white"></div>
          <div class="navbar">
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
      <!-- HERO CONTENT -->
      <div class="absolute left-0 w-full top-0">
        <div class="grid grid-cols-2 place items-center justify-items-center h-screen">
          <div class="hero-text xl:ml-80 text-white">
            <h1 class="xl:text-7xl md:text-5xl text-2xl uppercase text-white font-bebas">
              Love <span class="text-red-500">&</span>
            </h1>
            <h1 class="xl:text-7xl md:text-5xl text-2xl uppercase text-white font-bebas">
              ambitions
            </h1>

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
              <h1 class="xl:text-5xl md:text-3xl font-bebas">Breakneck</h1>
              <div class="flex items-center justify-end w-full space-x-5 my-2.5">
                <button class="py-3 px-6 rounded-[30px] text-white text-base bg-[#D3041C]">
                  Join our Comunity
                </button>
                <h1 class="text-5xl font-bebas">Speed</h1>
              </div>
            </div>
          </div>
          <div class="image_wrapper w-full">
            <img src="@/assets/images/hero/hero-1.png" class="object-contain ml-20 mt-10" />
          </div>
        </div>
      </div>
      <!-- SPARKELS -->
      <div class="absolute left-0 -bottom-96 border">
        <img src="@/assets/images/hero/sparks.png" alt="" />
      </div>
      <BaseSocial />
    </div>
  </div>
</template>

<script setup>
import BaseSocial from '@/base/BaseSocial.vue'
</script>
