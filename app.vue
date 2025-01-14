<template>
  <div :class="{ 'dark': colorMode.value === 'dark' }">
    <div class="min-h-screen bg-background text-foreground">
      <!-- 主题切换按钮 -->
      <Button @click="toggleTheme" class="m-4">
        {{ colorMode.value === 'dark' ? '切换到亮色模式' : '切换到暗色模式' }}
      </Button>
      
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

// 使用 useColorMode composable
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

  
</script>
