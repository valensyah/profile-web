<script setup lang="ts">
import { onMounted } from 'vue';
import PathAnimate from '../parts/PathAnimate.vue';

onMounted(() => {
  const elm = document.getElementById("career-path");
  window.addEventListener("scroll", () => {
    const bottom = elm.getBoundingClientRect().top;
    const targetElm = document.querySelector("#path-animate");
    const cardElm = document.getElementsByClassName("path-card");
    console.log(bottom)
    if (bottom == 0) {
      targetElm.classList.add("path-animate-on")
      targetElm.classList.remove("path-animate-off")
      for (let i = 0; i < cardElm.length; i++) {
        const setCardAnimation = setInterval(() => {
          console.log("test", i)
          cardElm[i].classList.add("path-card-animate-on");
          clearInterval(setCardAnimation);
        }, 1000*(i+1));
      }
      return
    } else {
      targetElm.classList.remove("path-animate-on")
      targetElm.classList.add("path-animate-off")
      return
    }
  })
})
</script>

<template>
  <div  id="career-path" class="w-full h-screen px-5 py-10 md:px-20 md:py-24">
    <div class="block md:grid h-full md:items-center md:grid-cols-2 gap-6">
      <div class="h-5/6">
        <div class="mb-8 text-center md:text-left">
          <p class="font-bold text-5xl md:text-6xl text-neutral-900">Explore Companies, Discover Cultures,</p>
          <p class="font-bold text-5xl md:text-6xl text-green-700">Gain Experience</p>
        </div>
        <p class="text-xl text-center md:text-left md:text-3xl text-gray-700 mb-6 md:max-w-10/12">
            I started my career with an internship as a Junior Software Engineer in 2020. 
            Later, I got a full-time job as a Web Developer. Long story short, 
            I gained a lot of experience from the various companies I've worked with—socially, 
            culturally, and technically. Achievements, failures, and everything 
            in between have shaped me into who I am today. 
        </p>
      </div>
      <div class="hidden h-5/6 md:block">
        <div class="w-full h-full flex justify-center">
            <PathAnimate />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.path-animate-on {
  animation-name: pathAnimateOn;
  animation-duration: 1s;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}

.path-animate-off {
  animation-name: pathAnimateOff;
  animation-duration: 1s;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}

.path-card-animate-on {
  animation-name: pathCardAnimateOn;
  opacity: 0;
  animation-duration: 1s;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}

.path-card-animate-off {
  animation-name: pathCardAnimateOff;
  opacity: 1;
  animation-duration: 1s;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}

@keyframes pathAnimateOn {
  0% { width: 24px; border-radius: 99px; height: 0%; background: rgb(204, 198, 198) }
  100% { width: 24px; border-radius: 99px; height: 100%; background: rgb(204, 198, 198) }
}

@keyframes pathAnimateOff {
  0% { width: 24px; border-radius: 99px; height: 100%; background: rgb(204, 198, 198) }
  100% { width: 24px; border-radius: 99px; height: 0%; background: rgb(204, 198, 198) }
  /* 100% { display: hidden; } */
}

@keyframes pathCardAnimateOn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes pathCardAnimateOff {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
