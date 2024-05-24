<template>
  <div
    class="relative md:pt-60 w-full bg-[url('@/assets/images/section-2/2-3-back.png')] bg-cover bg-center bg-no-repeat"
  >
    <ChapterList />
    <CharacterList />
  </div>
</template>

<script setup>
import ChapterList from './ChapterList.vue'
import CharacterList from './CharacterList.vue'
</script>
