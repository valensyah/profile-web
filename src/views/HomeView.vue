<script setup>
import HomeBanner from '../components/home/HomeBanner.vue'
import ProfileSection from '@/components/home/ProfileSection.vue'
import CareerSection from '@/components/home/CareerSection.vue'
import DemoSection from '@/components/home/DemoSection.vue'
</script>

<template>
  <main class="w-full min-h-screen bg-slate-100">
    <HomeBanner />
    <ProfileSection />
    <CareerSection />
    <DemoSection />
  </main>
</template>
