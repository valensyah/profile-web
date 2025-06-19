<script setup lang="ts">
// import { onMounted } from 'vue'
import PathAnimate from '../parts/PathAnimate.vue'

// onMounted(() => {
//   const elm = document.getElementById('career-path')
//   window.addEventListener('scroll', () => {
//     const top = elm.getBoundingClientRect().top
//     const targetElm = document.querySelector('#path-animate')
//     const cardElm = document.getElementsByClassName('path-card')
//     console.log(top)
//     if (top <= 0) {
//       targetElm.classList.add('path-animate-on')
//       targetElm.classList.remove('path-animate-off')
//       for (let i = 0; i < cardElm.length; i++) {
//         cardElm[i].classList.add('path-card-animate-on')
//         cardElm[i].classList.remove('path-card-animate-off')
//       }
//       return
//     }

//     if (top > 0 && top <= 100) {
//       targetElm.classList.remove('path-animate-on')
//       targetElm.classList.add('path-animate-off')
//       for (let i = 0; i < cardElm.length; i++) {
//         cardElm[i].classList.remove('path-card-animate-on')
//         cardElm[i].classList.add('path-card-animate-off')
//       }
//       return
//     }
//   })
// })
</script>

<template>
  <div id="career" class="w-full min-h-screen lg:h-screen bg-slate-50 px-5 py-10 md:px-20 md:py-24">
    <div class="h-full grid md:items-center grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="w-full h-fit xl:h-5/6">
        <div class="mb-6 md:mb-8 text-left">
          <p class="font-bold text-3xl xl:text-5xl 2xl:text-6xl text-neutral-900">
            Explore Companies, Discover Cultures,
          </p>
          <p class="font-bold text-3xl xl:text-5xl 2xl:text-6xl text-green-700">Gain Experience</p>
        </div>
        <p
          class="text-xl text-justify md:text-left xl:text-xl 2xl:text-2xl text-gray-700 mb-6 md:max-w-10/12"
        >
          I started my career with an internship as a Junior Software Engineer in 2021. Later, I got
          a full-time job as a Web Developer. Long story short, I gained a lot of experience from
          the various companies I've worked with—socially, culturally, and technically.
          Achievements, failures, and everything in between have shaped me into who I am today.
        </p>
      </div>
      <div class="xl:w-full h-full lg:flex lg:justify-center">
        <div class="w-full h-full flex justify-center">
          <PathAnimate />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.path-animate-on {
  animation-name: pathAnimateOn;
  animation-duration: 0.5s;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-iteration-count: 1;
}

.path-animate-off {
  width: 24px;
  border-radius: 99px;
  height: 100%;
  background: rgb(204, 198, 198);
  display: block;
  animation-name: pathAnimateOff;
  animation-duration: 0.5s;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-iteration-count: 1;
  animation-delay: 1s;
}

.path-card-animate-on {
  animation-name: pathCardAnimateOn;
  opacity: 0;
  animation-duration: 0.5s;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-delay: 1s;
}

.path-card-animate-off {
  animation-name: pathCardAnimateOff;
  opacity: 1;
  animation-duration: 0.5s;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

@keyframes pathAnimateOn {
  0% {
    width: 24px;
    border-radius: 99px;
    height: 0%;
    background: rgb(204, 198, 198);
    display: block;
  }
  100% {
    width: 24px;
    border-radius: 99px;
    height: 100%;
    background: rgb(204, 198, 198);
    display: block;
  }
}

@keyframes pathAnimateOff {
  0% {
    width: 24px;
    border-radius: 99px;
    height: 100%;
    background: rgb(204, 198, 198);
    display: block;
  }
  100% {
    width: 24px;
    border-radius: 99px;
    height: 0%;
    background: rgb(204, 198, 198);
    display: none;
  }
  /* 100% { display: hidden; } */
}

@keyframes pathCardAnimateOn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes pathCardAnimateOff {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
