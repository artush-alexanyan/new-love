<template>
  <div class="relative h-screen">
    <div
      class="chapter-section absolute z-10 h-1/2 w-full left-0 top-1/2 transform -translate-y-1/2"
    ></div>
    <div class="absolute top-0 left-0 w-full overflow-hidden">
      <div class="relative">
        <div v-for="(chapter, index) in chapters" :key="chapter.id">
          <Transition enter-active-class="animate__animated  animate__slideInRight animate__fast">
            <div
              v-if="currentChapterIndex === index"
              class="grid md:grid-cols-2 place-items-center justify-items-center md:p-0 p-5 overflow-hidden"
            >
              <div class="img_wrapper">
                <img :src="currentChapter.image" alt="" />
              </div>
              <div>
                <div class="text_wrapper md:text-left text-center md:w-4/5 w-full text-white">
                  <p class="md:text-sm text-xs text-red-600">
                    {{ currentChapterIndex + 1 }} / {{ chapters.length }}
                  </p>
                  <h1
                    class="lg:text-[64px] md:text-4xl text-2xl font-vintage text-white uppercase lg:leading-none my-2"
                  >
                    {{ currentChapter.title }}
                  </h1>
                  <p class="md:text-sm text-xs text-[#ABABAB]">
                    Est amet faucibus elit libero eget quis. Euismod vulputate tortor dignissim
                    massa vestibulum diam rhoncus euismod facilisis. Morbi purus et odio a. Quisque
                    viverra pretium mauris vulputate sed pretium adipiscing pharetra. Pellentesque
                    ullamcorper posuere fermentum mauris.
                  </p>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const currentChapterIndex = ref(0)
const isTransitioning = ref(false)

const chapters = ref([
  {
    id: 0,
    title: 'corporate intrigue',
    image: 'man-1.png',
    description:
      'Est amet faucibus elit libero eget quis. Euismod vulputate tortor dignissim massavestibulum diam rhoncus euismod facilisis. Morbi purus et odio a. Quisque viverra pretium mauris vulputate sed pretium adipiscing pharetra. Pellentesque ullamcorper posuere fermentum mauris.'
  },
  {
    id: 1,
    title: 'new romance',
    image: 'man-2.png',
    description:
      'Est amet faucibus elit libero eget quis. Euismod vulputate tortor dignissim massavestibulum diam rhoncus euismod facilisis. Morbi purus et odio a. Quisque viverra pretium mauris vulputate sed pretium adipiscing pharetra. Pellentesque ullamcorper posuere fermentum mauris.'
  },
  {
    id: 2,
    title: 'revenge and quest for truth',
    image: 'man-3.png',
    description:
      'Est amet faucibus elit libero eget quis. Euismod vulputate tortor dignissim massavestibulum diam rhoncus euismod facilisis. Morbi purus et odio a. Quisque viverra pretium mauris vulputate sed pretium adipiscing pharetra. Pellentesque ullamcorper posuere fermentum mauris.'
  }
])

const mappedChapters = computed(() => {
  return chapters.value.map((chapter) => {
    return {
      ...chapter,
      image: new URL(`../../../assets/images/section-1/${chapter.image}`, import.meta.url).href
    }
  })
})

const currentChapter = computed(() => {
  return mappedChapters.value[currentChapterIndex.value]
})

const changeCarousel = () => {
  if (isTransitioning.value) return

  isTransitioning.value = true

  setTimeout(() => {
    if (currentChapterIndex.value < mappedChapters.value.length - 1) {
      currentChapterIndex.value++
    } else {
      currentChapterIndex.value = 0
    }
    isTransitioning.value = false
  }, 3000)
}

let carouselInterval

onMounted(() => {
  carouselInterval = setInterval(() => {
    changeCarousel()
  }, 3000)

  onUnmounted(() => {
    clearInterval(carouselInterval)
  })
})
</script>
