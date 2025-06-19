<script setup lang="ts"></script>

<template>
  <div id="profile" class="w-full min-h-screen md:h-screen px-5 py-10 md:px-10 xl:px-20 md:py-24">
    <div class="grid grid-cols-1 h-full md:items-center md:grid-cols-2 md:gap-6">
      <div class="h-5/6">
        <div class="mb-3 xl:mb-6 text-center md:text-left">
          <p class="font-bold text-3xl xl:text-5xl 2xl:text-6xl text-neutral-900">
            Muhammad Valensyah
          </p>
          <p class="font-bold text-3xl xl:text-5xl 2xl:text-6xl text-blue-500">Alfansyuri</p>
        </div>
        <p
          class="text-center md:text-left text-3xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-700 mb-3 xl:mb-6"
        >
          Frontend Developer
        </p>
        <p class="w-full text-justify text-xl xl:text-2xl 2xl:text-3xl text-gray-700 mb-6">
          Specialize in slicing UI design from figma, integrating API, make interactive and
          responsive design. I plan and design frontend structure and make better user experiences.
        </p>
        <div class="w-full flex justify-center md:justify-start">
          <a
            target="_blank"
            href="https://furniture-comprof.netlify.app/"
            class="bg-transparent border-2 text-indigo-700 cursor-pointer border-indigo-700 px-2 py-1.5 md:px-3 md:py-2.5 text-lg hover:bg-indigo-700 hover:text-white animate duration-200 ease-in-out rounded-xl"
          >
            Example
          </a>
        </div>
      </div>
      <div class="h-60 mt-6 md:mt-0 md:h-5/6 md:px-12 md:py-6">
        <div
          class="w-full h-full bg-showcase rounded-xl shadow-xl/20 hover:scale-120 animate duration-200 ease-in-out"
        ></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-showcase {
  background: url('/images/stack/showcase-1.png');
  background-size: cover;
}
</style>
