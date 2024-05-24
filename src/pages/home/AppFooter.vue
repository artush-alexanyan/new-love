<template>
  <div class="app-footer">
    <footer>
      <div class="w-[82.5%] mx-auto flex items-center justify-between py-14">
        <button @click="goToWaitlist">
          <img src="@/assets/logo.svg" class="md:h-auto h-8" alt="logo" />
        </button>
        <div class="copyright">
          <p class="text-[#ABABAB] text-xs">Copyright {{ currentYear }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => {
  return new Date().getFullYear()
})
const goToWaitlist = () => {
  const el = document.getElementById('home')
  el.scrollIntoView({ behavior: 'smooth' })
}
</script>
