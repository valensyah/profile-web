<script setup lang="ts">
import { ref, onMounted } from 'vue'

const images1 = ref<Array<String>>([
  '/images/stack/vue-js.png',
  '/images/stack/nuxt.png',
  '/images/stack/gitlab-3.svg',
  '/images/stack/tailwind.png',
])
const images2 = ref<Array<String>>([
  '/images/stack/node.png',
  '/images/stack/laravel.png',
  '/images/stack/pinia.png',
  '/images/stack/bootstrap.png',
])
const images3 = ref<Array<String>>([
  '/images/stack/github.png',
  '/images/stack/mysql.png',
  '/images/stack/next.png',
  '/images/stack/ts.png',
])

onMounted(() => {
  const navbar = document.getElementById('navbar')
  if (!navbar) return

  window.addEventListener('scroll', () => {
    console.log('1')
    const scrollTop = window.scrollY
    // const scrollHeight = document.documentElement.scrollHeight
    // const clientHeight = window.innerHeight

    // const isBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight

    if (scrollTop > 100) {
      navbar.classList.add('bg-neutral-700', 'text-white', 'shadow-md/10') // or any other Tailwind color
      navbar.classList.remove('text-neutral-900')
    } else if (scrollTop === 0) {
      navbar.classList.remove('bg-neutral-700', 'text-white', 'shadow-md/10')
      navbar.classList.add('text-neutral-900')
    }
  })
})
</script>

<template>
  <div
    class="w-full h-screen bg-neutral-900 flex flex-col lg:flex-row justify-end lg:justify-center items-center overflow-hidden relative"
  >
    <div
      id="navbar"
      class="w-full h-fit text-neutral-900 fixed top-0 left-0 px-5 md:px-20 py-5 md:flex gap-4 justify-end items-center hidden animate ease-in-out duration-150 z-50"
    >
      <a
        href="#"
        class="hover:text-white font-semibold px-2.5 py-1 hover:font-normal hover:shadow hover:bg-blue-600 animate duration-350 ease-in-out rounded-lg"
        >Home</a
      >
      <a
        href="#"
        class="hover:text-white font-semibold px-2.5 py-1 hover:font-normal hover:shadow hover:bg-blue-600 animate duration-350 ease-in-out rounded-lg"
        >About</a
      >
      <a
        href="#"
        class="hover:text-white font-semibold px-2.5 py-1 hover:font-normal hover:shadow hover:bg-blue-600 animate duration-350 ease-in-out rounded-lg"
        >Career</a
      >
      <a
        href="#"
        class="hover:text-white font-semibold px-2.5 py-1 hover:font-normal hover:shadow hover:bg-blue-600 animate duration-350 ease-in-out rounded-lg"
        >Project</a
      >
      <a
        href="#"
        class="hover:text-white font-semibold px-2.5 py-1 hover:font-normal hover:shadow hover:bg-blue-600 animate duration-350 ease-in-out rounded-lg"
        >Demo</a
      >
      <a
        href="#"
        class="hover:text-white font-semibold px-2.5 py-1 hover:font-normal hover:shadow hover:bg-blue-600 animate duration-350 ease-in-out rounded-lg"
        >Contact</a
      >
    </div>
    <div
      class="w-full h-full place-content-end lg:place-content-center place-items-center mb-20 lg:mb-0 relative top-0 z-30 text-center"
    >
      <div class="w-full h-screen absolute -z-10 top-0 left-0">
        <div
          class="w-full h-full grid grid-cols-3 gap-4 justify-between px-5 md:px-20 md:py-10 overflow-hidden relative"
        >
          <div
            class="w-full h-screen absolute top-0 left-0 bg-linear-to-t from-neutral-800 from-1% to-transparent z-20"
          ></div>
          <div class="section-1-animate h-fit flex flex-col items-center gap-[200px]">
            <div v-for="(item, i) in images1.concat(images1)" :key="i">
              <img :src="item" class="w-24 h-24" alt="" />
            </div>
          </div>
          <div class="section-2-animate h-fit flex flex-col items-center gap-[200px]">
            <div v-for="(item, i) in images2.concat(images2)" :key="i">
              <img :src="item" alt="" class="w-24 h-24" />
            </div>
          </div>
          <div class="section-3-animate h-fit flex flex-col items-center gap-[200px]">
            <div v-for="(item, i) in images3.concat(images3)" :key="i">
              <img :src="item" alt="" class="w-24 h-24" />
            </div>
          </div>
        </div>
      </div>
      <div class="text-white font-bold text-4xl sm:text-6xl mb-4">Frontend Developer</div>
      <div class="text-white text-lg sm:text-xl mb-4 px-5 md:px-0">
        Make UI more interactive, responsive, and user friendly
      </div>
      <button
        class="rounded-full px-3 py-2 text-md sm:text-xl text-white border border-2 border-white hover:bg-blue-600 hover:shadow-md hover:border-blue-600 hover:cursor-pointer hover:-translate-y-1 animate duration-500 ease-in-out"
      >
        Download CV
      </button>
    </div>
    <div
      class="w-full h-screen hidden lg:block lg:h-fit lg:place-items-end absolute top-0 left-0 lg:static"
    >
      <img src="../../assets/images/profile.jpg" alt="" class="w-full h-full" />
    </div>
  </div>
</template>

<style scoped>
.section-1-animate {
  position: relative;
  animation-name: rotating1;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.section-2-animate {
  position: relative;
  animation-name: rotating2;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;
}
.section-3-animate {
  position: relative;
  animation-name: rotating3;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes rotating1 {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-54.7%);
  }
}
@keyframes rotating2 {
  0% {
    transform: translateY(-54.7%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes rotating3 {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-54.7%);
  }
}
</style>
