<template>
  <div class="min-h-screen flex flex-col w-full">
    <div :class="{ 'dark': colorMode.value === 'dark' }">
      <div class="flex-1 bg-background text-foreground w-full">
        <LayoutHeader />
        
        <!-- 页面内容 -->
        <main class="container py-6 flex-grow mb-16">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>

<style>
/* 确保滚动条始终显示，防止页面跳动 */
html {
  overflow-y: scroll; /* 恢复滚动 */
}

/* 防止水平溢出 */
body {
  @apply overflow-x-hidden;
  width: 100%;
  min-height: 100vh;
}

/* 确保根元素撑满宽度 */
#__nuxt {
  width: 100vw;
  overflow-x: hidden;
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

/* 当对话框打开时保持滚动条 */
.dialog-open {
  overflow: hidden;
}

/* 修复对话框打开时的布局 */
.dialog-open body {
  padding-right: 8px;
}
</style>
