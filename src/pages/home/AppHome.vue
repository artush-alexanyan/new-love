<template>
  <div class="home bg-gradient-to-b from-[#0D0E11] to-[#0F161F]" id="home">
    <div class="app-stories">
      <AppHero />
      <AppCharacters />
    </div>
    <AppComunity />
    <AppWaitList />
    <AppFooter />
  </div>
</template>

<script setup>
import AppComunity from './AppComunity.vue'
import AppWaitList from './AppWaitList.vue'
import AppFooter from './AppFooter.vue'
import AppHero from './hero/AppHero.vue'
import AppCharacters from './characters/AppCharacters.vue'
</script>
