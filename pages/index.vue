<template>
  <div class="relative min-h-screen w-full overflow-hidden">
    <!-- 背景图片容器 -->
    <div class="fixed inset-0 w-full h-full">
      <div 
        class="absolute inset-0 bg-repeat-y w-full bg-center animate-fade-in parallax-container"
        :style="{
          backgroundImage: `url('/images/cc.jpg')`,
          backgroundSize: '100% auto',
          height: '150%',
          top: '-25%',
        }"
      />
    </div>
    
    <!-- 内容遮罩层 -->
    <div class="absolute inset-0 bg-black/10"></div>
    
    <!-- 主要内容 -->
    <div class="relative container mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-4 text-white">首页</h2>
      <!-- 其他内容 -->
      
      <!-- 添加一些测试内容以便查看滚动效果 -->
      <div class="space-y-8">
        <div v-for="n in 10" :key="n" class="h-32 bg-white/10 rounded-lg"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleParallax = () => {
  const scrolled = window.pageYOffset
  const rate = scrolled * 0.3
  const container = document.querySelector('.parallax-container')
  if (container) {
    const maxOffset = window.innerHeight * 0.25
    const limitedRate = Math.min(Math.max(rate, -maxOffset), maxOffset)
    container.style.transform = `translate3d(0px, ${limitedRate}px, 0px)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleParallax)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleParallax)
})
</script>

<style scoped>
/* 确保容器占满视口 */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* 视差容器样式 */
.parallax-container {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  will-change: transform;
  background-repeat: repeat-y;
  background-position: center top;
}

/* 动画 */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-slide-up {
  animation: slide-up 1s ease-out;
}
</style> 