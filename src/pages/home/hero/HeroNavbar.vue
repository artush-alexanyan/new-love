<template>
  <!-- NAVBAR -->
  <div class="absolute top-0 left-0 w-full z-10 md:block hidden">
    <div
      class="w-[87.5%] mx-auto flex items-center justify-between pt-8 pb-8 border-b border-b-gray-800"
    >
      <div class="logo">
        <img src="@/assets/logo.svg" alt="logo" />
      </div>
      <div class="navbar">
        <ul class="flex items-center w-full justify-between text-[#ABABAB]">
          <li
            @click="goToSection(navItem)"
            v-for="navItem in navbarItems"
            :key="navItem.id"
            class="px-3.5 hover:cursor-pointer"
          >
            {{ navItem.title }}
          </li>
        </ul>
      </div>
      <div class="right-box">
        <button
          @click="goToWaitlist"
          type="button"
          class="py-3 px-6 rounded-[30px] text-white border border-white bg-transparent"
        >
          Join the Waitlist
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navbarItems = ref([
  { id: 0, title: 'Main info', destination: 'main_info' },
  { id: 1, title: 'About', destination: 'about' },
  { id: 2, title: 'Main Characters', destination: 'main_characters' },
  { id: 3, title: 'Commounity', destination: 'community' }
])

const goToSection = (section) => {
  const el = document.getElementById(section.destination)
  el.scrollIntoView({ behavior: 'smooth' })
}
const goToWaitlist = () => {
  const el = document.getElementById('wait_list')
  el.scrollIntoView({ behavior: 'smooth' })
}
</script>
