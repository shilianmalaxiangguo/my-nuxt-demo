<template>
  <header class="sticky top-0 z-50 w-full h-[60px] border-b backdrop-blur-sm bg-background/80 supports-[backdrop-filter]:bg-background/60">
    <div class="container flex items-center justify-between h-full px-4">
      <!-- 左侧标题 -->
      <h1 class="text-xl font-bold text-primary">博客 Blog</h1>
      
      <!-- 中间导航菜单 -->
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem v-for="item in navigationItems" :key="item.path">
            <NavigationMenuTrigger 
              :class="[
                'hover:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary',
                { 'bg-primary/10 text-primary': route.path === item.path }
              ]"
              @click="navigateTo(item.path)"
            >
              {{ item.title }}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-4 w-[250px]">
                <li>
                  <NavigationMenuLink :to="item.path">
                    <div class="flex flex-col gap-2 p-4 rounded-md transition-colors hover:bg-primary/10 hover:text-primary">
                      <div class="text-sm font-medium">
                        {{ item.title }}
                      </div>
                      <p class="text-xs text-muted-foreground">
                        {{ item.description }}
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <!-- 右侧主题切换按钮 -->
      <Button 
        variant="ghost" 
        size="icon" 
        @click="toggleTheme"
        class="hover:bg-primary/10 hover:text-primary"
      >
        <Icon v-if="colorMode.value === 'dark'" name="ph:sun-bold" class="h-5 w-5" />
        <Icon v-else name="ph:moon-bold" class="h-5 w-5" />
      </Button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Icon } from '#components'

const route = useRoute()
const router = useRouter()
const colorMode = useColorMode()

const navigationItems = [
  { 
    title: '首页', 
    path: '/',
    description: '博客首页，展示最新文章和推荐内容'
  },
  { 
    title: '目录', 
    path: '/catalog',
    description: '所有文章的分类目录'
  },
  { 
    title: '关于', 
    path: '/about',
    description: '关于博主和博客的更多信息'
  }
]

const navigateTo = (path: string) => {
  router.push(path)
}

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.navigation-menu-trigger[data-state='open'] {
  @apply bg-primary/10 text-primary;
}

.navigation-menu-content {
  @apply animate-in fade-in zoom-in-95;
}

/* 添加导航菜单的基础样式 */
:deep(.navigation-menu-list) {
  @apply flex gap-1;
}

:deep(.navigation-menu-trigger) {
  @apply inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50;
}

:deep(.navigation-menu-content) {
  @apply absolute top-0 left-0 w-full animate-in fade-in-80 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:w-auto;
}
</style> 