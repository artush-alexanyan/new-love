<template>
  <div class="app-stories bg-gradient-to-r from-black">
    <div
      class="relative w-full bg-[url('@/assets/images/section-1/section-1-bg.png')] bg-contain bg-center bg-no-repeat"
    >
      <div class="absolute inset-0 w-full left-0 bg-black bg-opacity-90"></div>
      <div class="relative h-screen">
        <div class="absolute top-0 left-0 w-full">
          <div class="grid grid-cols-2 place-items-center justify-items-center">
            <div class="img_wrapper">
              <img src="@/assets/images/section-1/man-1.png" alt="" />
            </div>
            <div>
              <div class="text_wrapper w-5/6 text-white">
                <p class="text-sm text-red-600">1/3</p>
                <h1 class="text-7xl uppercase font-bebas my-2">corporate intrigue</h1>
                <p class="text-sm text-[#ABABAB]">
                  Est amet faucibus elit libero eget quis. Euismod vulputate tortor dignissim massa
                  vestibulum diam rhoncus euismod facilisis. Morbi purus et odio a. Quisque viverra
                  pretium mauris vulputate sed pretium adipiscing pharetra. Pellentesque ullamcorper
                  posuere fermentum mauris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="top-0 left-0 w-full">
          <div class="grid grid-cols-2">
            <div class=""></div>
            <div>
              <img :src="currentCharacter.image" alt="character-image" />
            </div>
          </div>
        </div>

        <div class="absolute bottom-40 left-0 w-full flex items-center justify-center">
          <div class="text_wrapper w-1/2 text-white">
            <div class="w-1/2 mx-auto">
              <p class="text-right text-sm mb-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, doloribus
                dignissimos. Nobis ea sit, consequuntur itaque dignissimos aliquid assumenda magnam
                dolore officia ex totam. Mollitia corrupti dignissimos magnam dolorum consequuntur.
              </p>
            </div>
            <div class="text-right">
              <h1 class="text-7xl text-white uppercase font-bebas">
                <span class="text-red-600"> {{ currentCharacter.name }} </span>
                {{ currentCharacter.last_name }}
              </h1>
              <p class="text-right text-sm">
                Leo ipsum duis sed non fusce volutpat id turpis massa.
              </p>
            </div>
          </div>
        </div>

        <div class="absolute left-28 top-1/2 transform -translate-y-1/2 text-white">
          <ul>
            <li
              @click="changeCharacter(index)"
              class="h-[88px] w-[88px] rounded-2xl my-5 flex items-center hover:cursor-pointer"
              v-for="(character, index) in mappedCharacters"
              :key="character.id"
            >
              <img
                :src="character.avatar"
                alt="character-avatar"
                class="h-[88px] w-[88px] rounded-2xl"
                :class="{ 'border-2  border-gray-100': currentIndex === index }"
              />
              <img
                v-if="currentIndex === index"
                src="@/assets/images/section-2/arrow-left.png"
                alt="arrow-left"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const currentIndex = ref(0)

const characters = ref([
  {
    id: 0,
    name: 'EMMA',
    last_name: 'DAWSON',
    avatar: 'man-1-avatar.png',
    image: 'man-1.png'
  },
  {
    id: 1,
    name: 'Jack',
    last_name: 'Ramsey',
    avatar: 'man-2-avatar.png',
    image: 'man-2.png'
  },
  {
    id: 2,
    name: 'Chance',
    last_name: 'Harrison',
    avatar: 'man-3-avatar.png',
    image: 'man-3.png'
  },
  {
    id: 3,
    name: 'Maria',
    last_name: 'Luna',
    avatar: 'man-4-avatar.png',
    image: 'man-4.png'
  },
  {
    id: 4,
    name: 'Russell',
    last_name: 'Wood',
    avatar: 'man-5-avatar.png',
    image: 'man-5.png'
  }
])

const mappedCharacters = computed(() => {
  return characters.value.map((character) => {
    return {
      ...character,
      avatar: new URL(`../../assets/images/section-2/${character.avatar}`, import.meta.url).href,
      image: new URL(`../../assets/images/section-2/${character.image}`, import.meta.url).href
    }
  })
})

const currentCharacter = computed(() => {
  return mappedCharacters.value[currentIndex.value]
})

const changeCharacter = (index) => {
  console.log('index', index)
  currentIndex.value = index
}
</script>
