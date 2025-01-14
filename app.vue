<template>
  <div :class="{ 'dark': colorMode.value === 'dark' }">
    <div class="min-h-screen bg-background text-foreground">
      <LayoutHeader />
      
      <!-- 页面内容 -->
      <main class="container py-6">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>
