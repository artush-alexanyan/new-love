<template>
  <div class="relative overflow-hidden">
    <div class="top-0 md:left-0 right-0 w-full">
      <div class="grid md:grid-cols-2">
        <div class=""></div>
        <div class="relative">
          <img :src="currentCharacter.image" alt="character-image" />
          <div
            class="absolute z-20 top-[60%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 md:block hidden"
          >
            <button type="button" @click="changeCharacterWithLoop">
              <img src="@/assets/images/section-2/dubble-arrow.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute lg:bottom-18 md:bottom-20 bottom-10 md:left-0 right-0 w-full flex items-center justify-center"
    >
      <div class="text_wrapper w-full">
        <div class="md:w-1/4 mx-auto text-right">
          <p
            class="md:text-right text-center md:text-sm text-xs md:block hidden mb-2.5 text-[#F7F7F7]"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, doloribus
            dignissimos. Nobis ea sit, consequuntur itaque dignissimos aliquid assumenda magnam
            dolore officia ex totam. Mollitia corrupti dignissimos magnam dolorum consequuntur.
          </p>
        </div>
        <div
          class="w-8/12 md:mx-auto justify-end flex flex-col md:items-end items-start md:p-0 px-5 md:text-center text-left"
        >
          <h1 class="xl:text-7xl md:text-5xl text-xl text-center text-white uppercase font-vintage">
            <span class="text-red-600"> {{ currentCharacter.name }} </span>
            <span class="ml-1">{{ currentCharacter.last_name }}</span>
          </h1>
          <p class="md:text-right text-center md:text-sm text-xs text-[#F7F7F7]">
            Leo ipsum duis sed non fusce volutpat id turpis massa.
          </p>
        </div>
      </div>
    </div>

    <div
      class="absolute z-10 lg:left-28 md:left-20 right-7 top-1/2 transform -translate-y-1/2 text-white"
    >
      <ul>
        <li
          @click="changeCharacter(index)"
          class="lg:h-[88px] md:h-16 h-12 lg:w-[88px] md:w-16 w-12 rounded-2xl my-5 flex items-center hover:cursor-pointer"
          v-for="(character, index) in mappedCharacters"
          :key="character.id"
        >
          <img
            :src="character.avatar"
            alt="character-avatar"
            class="lg:h-[88px] md:h-16 h-12 lg:w-[88px] md:w-16 w-12 rounded-2xl"
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
    <img
      class="absolute -bottom-10 left-0 w-full"
      src="@/assets/images/hero/3rd_TransEffect.png"
      alt="character-image"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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
      avatar: new URL(`../../../assets/images/section-2/${character.avatar}`, import.meta.url).href,
      image: new URL(`../../../assets/images/section-2/${character.image}`, import.meta.url).href
    }
  })
})

const currentCharacter = computed(() => {
  return mappedCharacters.value[currentIndex.value]
})

const changeCharacter = (index) => {
  currentIndex.value = index
}
const changeCharacterWithLoop = () => {
  currentIndex.value = (currentIndex.value + 1) % characters.value.length
}
</script>
