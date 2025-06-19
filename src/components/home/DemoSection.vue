<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

interface Code {
  value: number
  rotate: number
}

interface QNA {
  q: string
  a: string
}

const code = ref<Array<Code>>([
  { value: 0, rotate: 0 },
  { value: 1, rotate: 26 },
  { value: 2, rotate: 56 },
  { value: 3, rotate: 90 },
  { value: 4, rotate: 118 },
  { value: 5, rotate: 148 },
  { value: 6, rotate: 180 },
  { value: 7, rotate: 206 },
  { value: 8, rotate: 236 },
  { value: 9, rotate: 270 },
])
const qna = ref<QNA[]>([
  {
    q: 'Date and last two digits of the year Indonesia gained independence',
    a: '1745',
  },
  {
    q: 'Date and month gojek was found',
    a: '0510',
  },
  {
    q: 'a single-action, semi-automatic pistol chambered in .45 ACP, designed by John Browning',
    a: '1911',
  },
])
const current = ref<number>(0)
const rotation = ref<number>(0)
const question = ref<string>('')
const passCode = ref<Array<string>>([])
const secretCode = ref<string>('')
const err = ref<boolean>(false)
const success = ref<boolean>(false)

onMounted(() => {
  const index = Math.floor(Math.random() * 3)
  question.value = qna.value[index].q
  secretCode.value = qna.value[index].a
})

const backward = () => {
  const moveTo = current.value - 1
  const getRotation = code.value.find((x) => x.value === moveTo)
  if (getRotation && getRotation.rotate >= 0) {
    rotation.value = getRotation.rotate
    current.value = moveTo
  }
}

const forward = () => {
  const moveTo = current.value + 1
  const getRotation = code.value.find((x) => x.value === moveTo)
  if (getRotation && getRotation.rotate) {
    rotation.value = getRotation.rotate
    current.value = moveTo
  }
}

const accCode = () => {
  if (passCode.value.length < 4) {
    passCode.value.push(current.value.toString())
  }
}

const reset = () => {
  passCode.value = []
}

const submit = () => {
  const submitted = passCode.value.join('')
  const match = submitted === secretCode.value
  console.log(submitted, secretCode.value)
  if (!match) {
    notify(match)
    err.value = true
    setTimeout(() => {
      err.value = false
    }, 1500)
    return
  }
  notify(match)
  success.value = true
  setTimeout(() => {
    success.value = false
  }, 1500)
}

const notify = (match: boolean) => {
  if (!match)
    return toast.error('Incorrect combination code!', {
      autoClose: 2000,
    })

  toast.success('Congratulations! You solve the code.', {
    autoClose: 2000,
  }) // ToastOptions
}

console.log(rotation.value)
</script>
<template>
  <div id="demo" class="w-full min-h-screen px-5 py-10 md:px-20 md:py-24">
    <div class="w-full h-full flex flex-col-reverse gap-4 lg:grid lg:grid-cols-2 items-center">
      <div class="w-full text-center">
        <p class="text-base lg:text-xl font-semibold mb-6">{{ question }}</p>
        <div class="w-full flex gap-4 items-center justify-center mb-6">
          <div class="w-fit text-center" v-for="i in 4" :key="i">
            <div
              :class="
                [
                  `w-24 h-24 text-xl rounded-lg shadow bg-white animate duration-100 ease-in flex items-center justify-center`,
                  err
                    ? `border border-red-500 shadow-red-300 text-red-500`
                    : success
                      ? `border border-green-500 shadow-green-300 text-green-500`
                      : '',
                ].join(' ')
              "
            >
              {{ passCode[i - 1] ?? '-' }}
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center gap-4">
          <button
            @click="submit()"
            :class="`rounded-lg px-3 py-2 cursor-pointer shadow-md ${passCode.length === 4 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-50 '}`"
          >
            Submit
          </button>
          <button
            @click="reset()"
            class="rounded-lg px-3 py-2 bg-red-500 text-white cursor-pointer shadow-md"
          >
            Reset
          </button>
        </div>
      </div>
      <div class="w-full flex flex-col gap-6 items-center justify-center">
        <div class="w-72 h-72 2xl:w-96 2xl:h-96 rounded-full inset-shadow-s bg-white relative">
          <span class="absolute right-[48.5%] top-2.5 2xl:right-[48.5%] 2xl:top-2.5">0</span>
          <span class="absolute right-[28%] top-7 2xl:right-[28%] 2xl:top-8">1</span>
          <span class="absolute right-[12.5%] top-18 2xl:right-[11%] 2xl:top-23">2</span>
          <span class="absolute right-[7%] top-33 2xl:right-[5%] 2xl:top-45">3</span>
          <span class="absolute right-[12.5%] top-48 2xl:right-[11%] 2xl:top-66">4</span>
          <span class="absolute right-[28%] top-59 2xl:right-[28%] 2xl:top-82">5</span>
          <span class="absolute right-[48.5%] top-62.5 2xl:right-[48.5%] 2xl:top-[90%]">6</span>
          <span class="absolute left-[28%] top-59 2xl:left-[28%] 2xl:top-82">7</span>
          <span class="absolute left-[12.5%] top-48 2xl:left-[11%] 2xl:top-66">8</span>
          <span class="absolute left-[7%] top-33 2xl:left-[5%] 2xl:top-44">9</span>
          <span class="absolute left-[12.5%] top-18 2xl:left-[28%] 2xl:top-8">.</span>
          <span class="absolute left-[28%] top-7 2xl:left-[11%] 2xl:top-23">.</span>
          <div class="w-full h-full flex justify-center items-center">
            <div
              class="w-48 h-48 2xl:w-72 2xl:h-72 rounded-full bg-slate-50 flex justify-center items-center"
            >
              <div
                :style="`transform: rotate(${rotation}deg);`"
                class="w-36 h-36 2xl:w-60 2xl:h-60 rounded-full bg-white inset-shadow-xs transition-transform animate duration-300 ease-in-out relative flex items-center justify-center"
              >
                <img
                  src="../../assets/images/arrow-right.png"
                  class="absolute -rotate-90 top-0 left-[34%] h-2/6"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-5">
          <button
            class="rounded-full flex justify-center items-center cursor-pointer inset-shadow-xs bg-sky-400 animate duration-200 ease-in-out hover:inset-shadow-xs hover:bg-sky-500"
            @click="backward()"
          >
            <img src="../../assets/images/left-chevron.png" class="h-1/2" alt="" />
          </button>
          <button
            class="bg-transparent text-xl cursor-pointer text-green-400 animate duration-150 ease-in-out hover:text-green-500"
            @click="accCode()"
          >
            accept
          </button>
          <button
            class="rounded-full flex justify-center items-center cursor-pointer inset-shadow-xs bg-sky-400 animate duration-200 ease-in-out hover:inset-shadow-xs hover:bg-sky-500"
            @click="forward()"
          >
            <img src="../../assets/images/right-chevron.png" class="h-1/2" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
