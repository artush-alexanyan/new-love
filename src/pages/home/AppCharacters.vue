<template>
  <div class="app-stories">
    <div class="hero">
      <div class="relative h-screen">
        <img src="@/assets/images/hero/image1.png" alt="" />
        <img src="@/assets/images/hero/image-2.png" alt="" />
        <!-- NAVBAR -->
        <div class="absolute top-0 left-0 w-full z-10 md:block hidden">
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
              <button
                type="button"
                class="py-3 px-6 rounded-[30px] text-white border border-white bg-transparent"
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
        <!-- HERO CONTENT -->
        <div class="absolute left-0 w-full top-0 md:px-0 px-5">
          <div class="grid md:grid-cols-2 place items-center justify-items-center h-screen">
            <div class="hero-text md:ml-80 text-white md:order-first order-last md:block hidden">
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
                <h1 class="xl:text-5xl md:text-3xl uppercase font-bebas ml-4 -mr-8">AT</h1>
              </div>

              <div class="text-right">
                <h1 class="xl:text-5xl md:text-3xl font-bebas">Breakneck</h1>
                <div class="flex items-center justify-end w-full space-x-5 my-2.5">
                  <button class="py-3 px-6 rounded-[30px] text-white text-base bg-[#D3041C]">
                    Join our Comunity
                  </button>
                  <h1 class="xl:text-5xl md:text-3xl font-bebas">Speed</h1>
                </div>
              </div>
            </div>

            <div class="image_wrapper w-full">
              <img src="@/assets/images/hero/hero.png" class="object-contain md:ml-24 ml-16" />
            </div>
            <div class="mobile_text-wrapper -mt-20 text-center sm:hidden">
              <h1 class="text-2xl uppercase text-white font-bebas">
                Love
                <span class="text-red-500">&</span>
                Ambitions
              </h1>
              <p class="text-sm text-[#ABABAB] mt-5">
                Secrets and betrayals in the glittering at high stakes of Formula 1 racing.
              </p>
              <div class="border-t border-t-white mx-10 my-2.5">
                <h2 class="text-xl font-bebas text-white pt-2.5">AT Breakneck Speed</h2>
              </div>
              <div class="mx-10">
                <button class="py-3 px-6 rounded-[30px] w-full text-white text-base bg-[#D3041C]">
                  Join our Comunity
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- SPARKELS -->
        <div class="absolute left-0 md:top-[40%] top-1/2">
          <img src="@/assets/images/hero/sparks.png" alt="" />
        </div>
        <!-- <BaseSocial /> -->
      </div>
    </div>
    <div
      class="relative md:pt-60 w-full bg-[url('@/assets/images/section-2/2-3-back.png')] bg-cover bg-center bg-no-repeat"
    >
      <div class="relative h-screen">
        <div class="absolute top-0 left-0 w-full">
          <div id="chapter-section border-4" v-for="(chapter, index) in chapters" :key="chapter.id">
            <Transition name="custom-classes">
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
          src="@/assets/images/hero/3rd_TransEffect.png"
          alt="character-image"
        />
      </div>
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
  currentIndex.value = index
}
const handleScroll = (event) => {
  const deltaY = event.deltaY
  // console.log('deltaY', deltaY)

  if (isInChapterSection()) {
    if (deltaY > 0 && currentChapterIndex.value < chapters.value.length - 1) {
      event.preventDefault()
      handleScrollBottom()
    } else if (deltaY < 0 && currentChapterIndex.value > 0) {
      event.preventDefault()
      handleScrollTop()
    }
  } else {
    return
  }
}

const handleScrollTop = () => {
  setTimeout(() => {
    if (currentChapterIndex.value > 0) {
      currentChapterIndex.value--
    }
  }, 800)
}

const handleScrollBottom = () => {
  setTimeout(() => {
    if (currentChapterIndex.value < chapters.value.length - 1) {
      currentChapterIndex.value++
    }
  }, 800)
}
const isInChapterSection = () => {
  const chapterSection = document.getElementsByClassName('chapter-section')
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
