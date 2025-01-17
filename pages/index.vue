<template>
  <!-- 背景容器 - 固定定位占满全屏 -->
  <div class="fixed inset-0 -z-10">
    <div class="dots-pattern"></div>
  </div>

  <!-- 内容区域 - 考虑 header 高度 -->
  <div class="h-[calc(100vh-80px)] w-full">
    <!-- 主要内容 -->
    <div class="h-full w-full flex items-center justify-center px-4">
      <div class="max-w-4xl w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-sm animate-fade-in">
        <div class="flex flex-col md:flex-row gap-12 items-center">
          <!-- 左侧头像区域 -->
          <div class="relative group">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-sm 
                        transition-transform duration-500 group-hover:scale-105">
              <img 
                src="/images/avatar.jpg" 
                alt="Avatar"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- 装饰性花朵 -->
            <span class="absolute -top-4 -right-4 transform rotate-45 transition-colors duration-300
                         text-rose-300 dark:text-rose-400 
                         group-hover:text-rose-400 dark:group-hover:text-rose-300">
              <Icon name="ph:flower-lotus-bold" size="24" />
            </span>
            <span class="absolute -bottom-2 -left-2 transform -rotate-45 transition-colors duration-300
                         text-pink-200 dark:text-pink-300
                         group-hover:text-pink-300 dark:group-hover:text-pink-200">
              <Icon name="ph:flower-lotus" size="20" />
            </span>
          </div>

          <!-- 右侧介绍区域 -->
          <div class="flex-1 space-y-6 text-center md:text-left">
            <div class="space-y-2">
              <h1 class="text-2xl font-medium text-gray-700 dark:text-gray-200 animate-slide-up">
                Hi, I'm Baoan      
              </h1>
              <p class="text-lg text-gray-500 dark:text-gray-400 font-light animate-slide-up animation-delay-100">
                Frontend Developer
              </p>
            </div>
            
            <div class="text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-up animation-delay-200 
                        font-light tracking-wide">
              <p>
                专注于现代 Web 开发，热衷于创造优雅的用户界面。
                擅长 Vue.js、Nuxt.js 和 TypeScript，
                追求代码的优雅与工程的可维护性。
                喜欢将设计的美感融入到每一行代码中。
              </p>
            </div>

            <!-- 技术标签 -->
            <div class="flex flex-wrap gap-2 justify-center md:justify-start animate-slide-up animation-delay-300">
              <span class="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                Vue.js
              </span>
              <span class="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                Nuxt.js
              </span>
              <span class="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                TypeScript
              </span>
              <span class="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                TailwindCSS
              </span>
            </div>

            <!-- 社交链接 -->
            <div class="flex gap-6 justify-center md:justify-start animate-slide-up animation-delay-400">
              <a href="#" class="social-link">
                <Icon name="mdi:github" size="24" />
              </a>
              <a href="#" class="social-link">
                <Icon name="mdi:twitter" size="24" />
              </a>
              <a href="#" class="social-link">
                <Icon name="material-symbols:mail" size="24" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dots-pattern {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  
  /* 使用多层渐变创造更丰富的点阵效果 */
  background-image: 
    /* 第一层点阵 - Nuxt 绿色 */
    radial-gradient(
      circle at center,
      #00DC82 4px,
      transparent 4px
    ),
    /* 第二层点阵 - Vue 蓝绿色 */
    radial-gradient(
      circle at center,
      white 3px,
      #42b883 3px,
      #42b883 4px,
      transparent 4px
    ),
    /* 第三层点阵 - 主题色变体 */
    radial-gradient(
      circle at center,
      #059669 3px,
      transparent 3px
    );
  
  background-size: 28px 28px;
  background-position: 
    0 0,
    14px 14px,
    28px 28px;
  
  animation: movePattern 8s linear infinite;
}

/* 暗色模式样式 */
:root.dark .dots-pattern {
  background-color: #111827;
  background-image: 
    /* 暗色模式下调整颜色亮度和透明度 */
    radial-gradient(
      circle at center,
      #00DC82 4px,
      transparent 4px
    ),
    radial-gradient(
      circle at center,
      #1f2937 3px,
      #42b883 3px,
      #42b883 4px,
      transparent 4px
    ),
    radial-gradient(
      circle at center,
      #34d399 3px,
      transparent 3px
    );
}

@keyframes movePattern {
  from {
    background-position: 
      0 0,
      14px 14px,
      28px 28px;
  }
  to {
    background-position: 
      -28px -28px,
      -14px -14px,
      0 0;
  }
}

:root {
  --primary-color: #059669; /* 更深的绿色 */
  --bg-color: #ffffff; /* 纯白背景 */
}

:root.dark {
  --primary-color: #34d399;
  --bg-color: #111827;
}

.social-link {
  @apply text-gray-400 dark:text-gray-500 hover:text-emerald-500 dark:hover:text-emerald-400 
         transition-colors duration-300;
}

.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

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

<script setup>
const colorMode = useColorMode()

// 切换暗色/亮色模式
const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script> 