<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 mt-[80px] container mx-auto px-4">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
</script> 