<template>
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
</template>
