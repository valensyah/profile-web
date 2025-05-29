<script setup lang="ts"></script>

<template>
  <div class="w-full min-h-screen px-5 py-10 md:px-10 md:py-24">
    <div class="block md:grid h-full md:grid-cols-2 gap-6">
      <div>
        <div class="mb-6 text-center md:text-left">
          <p class="font-bold text-4xl md:text-5xl text-neutral-900">Muhammad Valensyah</p>
          <p class="font-bold text-4xl md:text-5xl text-blue-500">Alfansyuri</p>
        </div>
        <p class="text-2xl text-center md:text-left md:text-4xl font-semibold text-gray-700 mb-6">
          Frontend Developer
        </p>
        <p class="text-lg text-center md:text-left md:text-2xl text-gray-700 mb-6">
          Specialize in slicing UI design from figma, make interactive and responsive design. I plan
          and design frontend structure and make better user experiences
        </p>
        <div class="w-full flex justify-center md:justify-start">
          <button
            class="bg-transparent border-2 text-indigo-700 cursor-pointer border-indigo-700 px-2 py-1.5 md:px-3 md:py-2.5 text-lg md:text-2xl hover:bg-indigo-700 hover:text-white animate duration-200 ease-in-out rounded-xl"
          >
            View example
          </button>
        </div>
      </div>
      <div class="hidden md:block md:px-12 md:py-6">
        <div
          class="w-full h-full bg-gray-200 rounded-xl shadow-xl/20 hover:scale-110 animate duration-200 ease-in-out"
        ></div>
      </div>
    </div>
  </div>
</template>
