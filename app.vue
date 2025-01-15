<template>
  <div :class="{ 'dark': colorMode.value === 'dark' }">
    <div class="min-h-screen bg-background text-foreground overflow-x-hidden">
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

<style>
/* 确保滚动条始终显示，防止页面跳动 */
html {
  overflow-y: scroll;
}

/* 防止水平溢出 */
body {
  @apply overflow-x-hidden;
  width: 100%;
}

/* 可选：美化滚动条 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-background/50;
}

::-webkit-scrollbar-thumb {
  @apply bg-primary/20 rounded-full hover:bg-primary/30 transition-colors;
}
</style>
