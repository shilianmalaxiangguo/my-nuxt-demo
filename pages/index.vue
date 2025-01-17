<template>
  <div class="h-screen w-full overflow-hidden">
    <!-- 圆点背景容器 -->
    <div class="fixed inset-0">
      <!-- 添加border来测试容器位置 -->
      <div class="dots-pattern"></div>
    </div>
    
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
            <!-- 装饰性叶子 -->
            <span class="absolute -top-4 -right-4 text-emerald-300/60 dark:text-emerald-400/60 transform rotate-45">
              <Icon name="material-symbols:eco" size="24" />
            </span>
            <span class="absolute -bottom-2 -left-2 text-emerald-200/50 dark:text-emerald-500/50 transform -rotate-45">
              <Icon name="material-symbols:eco" size="20" />
            </span>
          </div>

          <!-- 右侧介绍区域 -->
          <div class="flex-1 space-y-6 text-center md:text-left">
            <div class="space-y-2">
              <h1 class="text-2xl font-medium text-gray-700 dark:text-gray-200 animate-slide-up">
                Hi, I'm Your Name
              </h1>
              <p class="text-lg text-gray-500 dark:text-gray-400 font-light animate-slide-up animation-delay-100">
                デジタルクリエイター
              </p>
            </div>
            
            <div class="text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-up animation-delay-200 
                        font-light tracking-wide">
              <p>
                在这里，我记录着关于设计与生活的点滴思考。
                喜欢探索数字艺术与传统美学的平衡，
                期待与你分享我的创作历程。
              </p>
            </div>

            <!-- 社交链接 -->
            <div class="flex gap-6 justify-center md:justify-start animate-slide-up animation-delay-300">
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
  background-color: #ffffff; /* 亮色模式背景色 */
  
  /* 第一层圆点 - 实心主题色 */
  background-image: 
    /* 主题色实心圆点 */
    radial-gradient(
      circle at center,
      #059669 4px,
      transparent 4px
    ),
    /* 白色圆点带边框 */
    radial-gradient(
      circle at center,
      white 3px,
      #059669 3px,
      #059669 4px,
      transparent 4px
    );
  
  /* 设置圆点大小和位置 */
  background-size: 40px 40px;
  background-position: 
    0 0,    /* 第一层圆点位置 */
    20px 20px;  /* 第二层圆点位置 */
}

/* 暗色模式样式 */
:root.dark .dots-pattern {
  background-color: #111827;
  background-image: 
    radial-gradient(
      circle at center,
      #34d399 4px,
      transparent 4px
    ),
    radial-gradient(
      circle at center,
      #1f2937 3px,
      #34d399 3px,
      #34d399 4px,
      transparent 4px
    );
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