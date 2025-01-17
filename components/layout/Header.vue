<template>
  <div class="fixed top-0 left-0 right-0 z-50 w-full">
    <header class="h-[60px] border-b backdrop-blur-sm bg-background/80 supports-[backdrop-filter]:bg-background/60">
      <div class="container flex items-center h-full px-4">
        <!-- 左侧标题 -->
        <h1 class="text-xl font-bold text-primary shrink-0">博客 Blog</h1>
        
        <!-- 中间导航菜单 -->
        <div class="flex items-center gap-4 flex-1 justify-center">
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
        </div>
        
        <!-- 右侧搜索和主题切换 -->
        <div class="flex items-center gap-2 shrink-0 ml-auto">
          <!-- 搜索按钮 -->
          <Button
            variant="ghost"
            size="icon"
            class="hover:bg-primary/10 hover:text-primary focus-visible:ring-1 focus-visible:ring-primary"
            @click="openSearch"
          >
            <Icon name="ph:magnifying-glass" class="h-5 w-5" />
            <span class="sr-only">搜索 (⌘K)</span>
          </Button>

          <!-- 主题切换按钮 -->
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
      </div>
    </header>

    <!-- 搜索结果对话框 -->
    <Dialog :open="isSearchOpen" @update:open="(value) => isSearchOpen = value">
      <DialogContent class="fixed left-[50%] top-[50%] w-full max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-xl border bg-background/95 p-0 shadow-2xl backdrop-blur-sm">
        <div class="flex max-h-[85vh] flex-col">
          <!-- 搜索输入框 -->
          <div class="flex items-center gap-3 border-b px-6 py-4 sticky top-0 bg-background/95 backdrop-blur-sm relative">
            <Icon name="ph:magnifying-glass" class="h-5 w-5 text-muted-foreground" />
            <input
              ref="searchInput"
              v-model="searchQuery"
              type="text"
              placeholder="探索知识..."
              class="flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground"
              @keydown.esc="closeSearch"
            />
            <div class="flex items-center gap-4 pr-8">
              <kbd class="hidden rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground md:inline-block">
                ESC
              </kbd>
            </div>
            <DialogClose class="absolute right-4 top-1/2 -translate-y-1/2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X class="h-4 w-4" />
              <span class="sr-only">Close</span>
            </DialogClose>
          </div>

          <!-- 搜索结果 -->
          <div class="flex-1 overflow-y-auto">
            <div v-if="searchResults.length > 0" class="space-y-4 p-4">
              <div v-for="result in searchResults" :key="result.item._path" class="space-y-4">
                <!-- 文章卡片 -->
                <Card 
                  class="cursor-pointer group relative overflow-hidden border-none ring-1 ring-border/50 hover:ring-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5" 
                  @click="navigateToResult(result.item)"
                >
                  <!-- 背景装饰 -->
                  <div class="absolute inset-0 bg-gradient-to-br from-muted to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <CardHeader>
                    <CardTitle>
                      <h3 class="text-lg font-medium group-hover:text-primary/90 transition-colors">
                        <span v-html="highlightMatch(result.matches.find(m => m.key === 'title'))" />
                      </h3>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <!-- 匹配的内容片段 -->
                    <div class="text-sm text-muted-foreground/90 leading-relaxed">
                      <div class="prose-sm dark:prose-invert max-w-none group-hover:text-foreground/90 transition-colors">
                        <span v-html="highlightMatch(result.matches.find(m => m.key === 'description'))" />
                      </div>
                    </div>
                    <!-- 底部装饰线 -->
                    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <!-- 空状态 -->
            <div v-else-if="searchQuery" class="p-4 text-center">
              <Icon name="ph:magnifying-glass-bold" class="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 class="mt-4 text-lg font-medium">未找到相关内容</h3>
              <p class="mt-2 text-sm text-muted-foreground">
                试试其他关键词，或者浏览我们的
                <NuxtLink to="/catalog" class="text-primary hover:underline" @click="closeSearch">
                  文章目录
                </NuxtLink>
              </p>
            </div>
            
            <!-- 初始状态 -->
            <div v-else class="p-4 text-center">
              <Icon name="ph:sparkle-bold" class="mx-auto h-12 w-12 text-primary/50" />
              <h3 class="mt-4 text-lg font-medium">发现新知识</h3>
              <p class="mt-2 text-sm text-muted-foreground">
                输入关键词，探索感兴趣的内容
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
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
import { CommandDialog } from '@/components/ui/command-dialog'
import { useAsyncData, queryContent } from '#imports'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import Fuse from 'fuse.js'

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

const { data: posts } = await useAsyncData('posts', () => {
  return queryContent()
    .where({ _dir: 'posts' })
    .only(['title', 'description', '_raw', '_path'])
    .find()
})

// 搜索相关状态
const searchQuery = ref('')
const isSearchOpen = ref(false)
const searchInput = ref<HTMLInputElement>()
const mobileSearchInput = ref<HTMLInputElement>()

// 修复 Fuse.js 的类型问题
interface SearchResult {
  item: {
    _path: string;
    title: string;
    description: string;
    _raw: string;
  };
  matches: Array<{
    indices: Array<[number, number]>;
    key: string;
    value: string;
  }>;
}

// Fuse.js 配置修改
const fuse = new Fuse(posts.value || [], {
  keys: [
    { 
      name: 'title', 
      weight: 2 
    },
    { 
      name: 'description', 
      weight: 1 
    }
  ],
  includeMatches: true,
  minMatchCharLength: 1,
  threshold: 0.0,
  ignoreLocation: true,
  includeScore: true,
  findAllMatches: false,
  useExtendedSearch: true,
  location: 0,
  distance: 0,
  shouldSort: true
})

// 检查字符是否是单词边界
const isWordBoundary = (char: string) => {
  // 空字符串、空格、标点符号、括号等都算作单词边界
  return (
    char === '' || 
    /[\s\(\)-]/.test(char) ||
    // 匹配中文标点和特殊字符
    /[\u3000-\u303f\uff00-\uff0f\uff1a-\uff20\uff3b-\uff40\uff5b-\uff65]/.test(char) ||
    // 匹配中文字符
    /[\u4e00-\u9fa5]/.test(char)
  )
}

// 修改调试日志
console.log('Available posts:', posts.value?.map(post => ({
  title: post.title,
  description: post.description,
  content: post._raw?.slice(0, 100) + '...'
})))

// 搜索结果
const searchResults = computed(() => {
  if (!searchQuery.value) return []
  const query = searchQuery.value
  const results = fuse.search(query)
  .filter(result => {
    return result.matches.some(match => {
      return match.indices.some(([start, end]) => {
        const beforeChar = start === 0 ? '' : match.value[start - 1]
        const afterChar = end + 1 >= match.value.length ? '' : match.value[end + 1]
        const matchedText = match.value.slice(start, end + 1)
        
        const isExactMatch = matchedText.toLowerCase() === query.toLowerCase()
        
        // 使用新的边界检查函数
        const hasWordBoundaries = isWordBoundary(beforeChar) && isWordBoundary(afterChar)
        
        return isExactMatch && hasWordBoundaries
      })
    })
  })
  console.log('Search Results:', JSON.stringify(results, null, 2))
  return results
})

// 高亮匹配内容
const highlightMatch = (match?: { indices: Array<[number, number]>; value: string; key?: string }) => {
  if (!match?.value) return ''
  if (!match.indices?.length) return match.value

  let highlighted = ''
  let lastIndex = 0

  match.indices.forEach(([start, end]) => {
    const matchedText = match.value.slice(start, end + 1)
    const beforeChar = start === 0 ? '' : match.value[start - 1]
    const afterChar = end + 1 >= match.value.length ? '' : match.value[end + 1]
    
    const hasWordBoundaries = isWordBoundary(beforeChar) && isWordBoundary(afterChar)
    const isExactMatch = matchedText.toLowerCase() === searchQuery.value.toLowerCase()

    highlighted += match.value.slice(lastIndex, start)
    if (isExactMatch && hasWordBoundaries) {
      highlighted += `<span class="font-medium text-primary-foreground bg-primary/90 px-2 py-1 rounded-[2px] mr-2">${matchedText}</span>`
    } else {
      highlighted += matchedText
    }
    lastIndex = end + 1
  })

  highlighted += match.value.slice(lastIndex)
  return highlighted
}

// 处理搜索
const handleSearch = () => {
  if (searchQuery.value) {
    isSearchOpen.value = true
  }
}

// 打开搜索
const openSearch = () => {
  isSearchOpen.value = true
  document.documentElement.classList.add('dialog-open')
  nextTick(() => {
    // 聚焦对应的输入框
    if (window.innerWidth >= 768) {
      searchInput.value?.focus()
    } else {
      mobileSearchInput.value?.focus()
    }
  })
}

// 关闭搜索
const closeSearch = () => {
  isSearchOpen.value = false
  document.documentElement.classList.remove('dialog-open')
  searchQuery.value = ''
  // 移除焦点
  searchInput.value?.blur()
}

// 导航到搜索结果
const navigateToResult = (item: any) => {
  router.push(item._path)
  closeSearch()
}

// 快捷键处理
onMounted(() => {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      openSearch()
    }
  })
})
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