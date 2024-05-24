<template>
  <div class="hero">
    <div class="relative h-screen">
      <img src="@/assets/images/hero/image1.png" alt="" />
      <img src="@/assets/images/hero/image-2.png" alt="" />
      <HeroNavbar />
      <!-- HERO CONTENT -->
      <div class="absolute left-0 w-full top-0 md:px-0 px-5">
        <div class="grid md:grid-cols-2 place-items-center place-content-start overflow-hidden">
          <AppContentDesktop />
          <div class="image_wrapper w-full md:ml-60 ml-16 mt-5 overflow-hidden">
            <img src="@/assets/images/hero/hero.png" class="h-auto" />
          </div>
          <HeroContentMobile />
        </div>
      </div>
      <!-- SPARKELS -->
      <div class="absolute left-0 md:top-[40%] top-1/2">
        <img src="@/assets/images/hero/sparks.png" alt="sparks" />
      </div>
      <BaseSocial />
    </div>
  </div>
</template>

<script setup>
import BaseSocial from '@/base/BaseSocial.vue'
import HeroNavbar from './HeroNavbar.vue'
import HeroContentMobile from './HeroContentMobile.vue'
import AppContentDesktop from './AppContentDesktop.vue'
</script>
