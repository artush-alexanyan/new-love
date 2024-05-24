<template>
  <div class="absolute top-0 left-0 w-full z-10 md:hidden">
    <div class="relative">
      <div class="flex items-center justify-between w-full px-5 py-3.5">
        <div class="logo">
          <img src="@/assets/logo.svg" class="h-8" alt="logo" />
        </div>
        <button type="button" @click="toggleNavBar">
          <IconTimes v-if="showNavItems" />
          <IconNav v-else />
        </button>
      </div>
      <Transition
        enter-active-class="animate__animated animate__slideInDown animate__faster"
        leave-active-class="animate__animated animate__slideOutUp animate__faster"
      >
        <div
          v-if="showNavItems"
          class="absolute top-0 left-0 w-full h-auto z-30 bg-gradient-to-b from-[#0D0E11] to-[#0F161F]"
        >
          <div class="navbar p-5">
            <div class="flex items-center justify-between">
              <div class="logo">
                <img src="@/assets/logo.svg" class="h-8" alt="logo" />
              </div>
              <button type="button" @click="toggleNavBar">
                <IconTimes />
              </button>
            </div>
            <ul class="flex flex-col space-y-5 w-full justify-between text-[#ABABAB] my-5">
              <li
                @click="goToSection(navItem)"
                v-for="navItem in navbarItems"
                :key="navItem.id"
                class="hover:cursor-pointer"
              >
                {{ navItem.title }}
              </li>
            </ul>
            <div>
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
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconNav from '@/assets/icons/IconNav.vue'
import IconTimes from '@/assets/icons/IconTimes.vue'

const showNavItems = ref(false)

const toggleNavBar = () => {
  showNavItems.value = !showNavItems.value
}
const navbarItems = ref([
  { id: 0, title: 'Main info', destination: 'main_info' },
  { id: 1, title: 'About', destination: 'about' },
  { id: 2, title: 'Main Characters', destination: 'main_characters' },
  { id: 3, title: 'Commounity', destination: 'community' }
])

const goToSection = (section) => {
  showNavItems.value = false
  const el = document.getElementById(section.destination)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
const goToWaitlist = () => {
  showNavItems.value = false
  const el = document.getElementById('wait_list')
  el.scrollIntoView({ behavior: 'smooth' })
}
</script>
