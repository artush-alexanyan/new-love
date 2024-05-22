<template>
  <div class="app-stories bg-black">
    <div
      class="relative w-full bg-[url('@/assets/images/section-1/section-1-bg.png')] bg-cover bg-center bg-no-repeat"
    >
      <div class="absolute inset-0 w-full left-0 bg-black bg-opacity-90"></div>
      <div class="relative h-screen">
        <div class="absolute top-0 left-0 w-full">
          <div
            id="chapter-section"
            class="chapters"
            v-for="(chapter, index) in chapters"
            :key="chapter.id"
          >
            <Transition
              name="custom-classes"
              enter-active-class="animate__animated animate__slideInRight animate__fast"
            >
              <div
                v-if="currentChapterIndex === index"
                class="grid md:grid-cols-2 place-items-center justify-items-center md:p-0 p-5"
              >
                <div class="img_wrapper">
                  <img :src="currentChapter.image" alt="" />
                </div>
                <div>
                  <div class="text_wrapper md:text-left text-center md:w-5/6 w-full text-white">
                    <p class="md:text-sm text-xs text-red-600">
                      {{ currentChapterIndex + 1 }} / {{ chapters.length }}
                    </p>
                    <h1
                      class="lg:text-[64px] md:text-4xl text-2xl text-white uppercase lg:leading-none my-2"
                    >
                      {{ currentChapter.title }}
                    </h1>
                    <p class="md:text-sm text-xs text-[#ABABAB]">
                      Est amet faucibus elit libero eget quis. Euismod vulputate tortor dignissim
                      massa vestibulum diam rhoncus euismod facilisis. Morbi purus et odio a.
                      Quisque viverra pretium mauris vulputate sed pretium adipiscing pharetra.
                      Pellentesque ullamcorper posuere fermentum mauris.
                    </p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="top-0 md:left-0 right-0 w-full">
          <div class="grid md:grid-cols-2">
            <div class=""></div>
            <div>
              <img :src="currentCharacter.image" alt="character-image" />
            </div>
          </div>
        </div>

        <div
          class="absolute lg:bottom-40 md:bottom-20 bottom-10 md:left-0 right-0 w-full flex items-center justify-center"
        >
          <div class="text_wrapper lg:w-1/2 w-full text-white">
            <div class="w-1/2 mx-auto">
              <p class="md:text-right text-center md:text-sm text-xs md:block hidden mb-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, doloribus
                dignissimos. Nobis ea sit, consequuntur itaque dignissimos aliquid assumenda magnam
                dolore officia ex totam. Mollitia corrupti dignissimos magnam dolorum consequuntur.
              </p>
            </div>
            <div class="md:text-right text-center">
              <h1 class="xl:text-7xl md:text-5xl text-2xl text-white uppercase font-bebas">
                <span class="text-red-600"> {{ currentCharacter.name }} </span>
                {{ currentCharacter.last_name }}
              </h1>
              <p class="md:text-right text-center md:text-sm text-xs">
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
          class="absolute bottom-0 left-0 w-full"
          src="@/assets/images/section-2/shade_svg.svg"
          alt="character-image"
        />
      </div>

      <!-- COMUNITY SECTION -->

      <!-- <div class="app-comunity">
        <div
          class="relative h-screen bg-black w-full bg-[url('@/assets/images/section-3/section-3-bg.png')] bg-no-repeat bg-bottom"
        >
          <div class="absolute right-0 bottom-0">
            <img src="@/assets/images/section-3/sparks.png" alt="" />
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const currentIndex = ref(0)
const currentChapterIndex = ref(2)
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

const mappedCharacters = computed(() => {
  return characters.value.map((character) => {
    return {
      ...character,
      avatar: new URL(`../../assets/images/section-2/${character.avatar}`, import.meta.url).href,
      image: new URL(`../../assets/images/section-2/${character.image}`, import.meta.url).href
    }
  })
})

const mappedChapters = computed(() => {
  return chapters.value.map((chapter) => {
    return {
      ...chapter,
      image: new URL(`../../assets/images/section-1/${chapter.image}`, import.meta.url).href
    }
  })
})

const currentCharacter = computed(() => {
  return mappedCharacters.value[currentIndex.value]
})
const currentChapter = computed(() => {
  return mappedChapters.value[currentChapterIndex.value]
})
const changeCharacter = (index) => {
  console.log('index', index)
  currentIndex.value = index
}
const changeChapter = (index) => {
  console.log('index', index)
  currentChapterIndex.value = index
}
const handleScroll = (event) => {
  const deltaY = event.deltaY
  // console.log('deltaY', deltaY)

  if (isInChapterSection()) {
    console.log('We are on the chapters section')
    console.log('currentChapterIndex.value', currentChapterIndex.value)
    // console.log(
    //   currentChapterIndex.value < chapters.value.length - 1,
    //   'currentChapterIndex.value < chapters.value.length - 1'
    // )
    if (deltaY > 0 && currentChapterIndex.value < chapters.value.length - 1) {
      event.preventDefault() // Moved inside the conditional
      handleScrollBottom()
    } else if (deltaY < 0 && currentChapterIndex.value > 0) {
      event.preventDefault() // Moved inside the conditional
      handleScrollTop()
    }
  } else {
    // Allow default scrolling outside chapter section
  }
}

const handleScrollTop = () => {
  setTimeout(() => {
    if (currentChapterIndex.value > 0) {
      currentChapterIndex.value--
    }
  }, 800)
  console.log('Current chapter index', currentChapterIndex.value)
}

const handleScrollBottom = () => {
  setTimeout(() => {
    if (currentChapterIndex.value < chapters.value.length - 1) {
      currentChapterIndex.value++
    }
  }, 800)
  console.log('Current chapter index', currentChapterIndex.value)
}
const isInChapterSection = () => {
  const chapterSection = document.getElementById('chapter-section') // Adjust the selector as needed
  console.log('chapterSection', chapterSection)
  const rect = chapterSection.getBoundingClientRect()
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}
onMounted(() => {
  window.addEventListener('wheel', handleScroll, { passive: false })
})

onUnmounted(() => {
  window.removeEventListener('wheel', handleScroll)
})
</script>
