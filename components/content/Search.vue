<template>
  <div class="relative">
    <div class="relative">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="搜索文章..."
        class="w-full px-4 py-2 rounded-lg bg-background/50 backdrop-blur-sm border border-white/10"
        @focus="showResults = true"
      />
      <div 
        v-if="showResults && searchResults.length > 0"
        class="absolute top-full left-0 right-0 mt-2 max-h-96 overflow-y-auto rounded-lg bg-background/80 backdrop-blur-md border border-white/10"
      >
        <ul class="divide-y divide-white/10">
          <li 
            v-for="result in searchResults" 
            :key="result.item._path"
            class="p-4 hover:bg-white/10 transition-colors cursor-pointer"
            @click="handleSelect(result.item)"
          >
            <h3 class="text-lg font-medium">{{ result.item.title }}</h3>
            <p class="text-sm text-muted-foreground">{{ result.item.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Fuse from 'fuse.js'
import { useAsyncData } from '#app'

const searchQuery = ref('')
const showResults = ref(false)
const searchResults = ref([])

// 获取所有文章数据
const { data: articles } = await useAsyncData('articles', () => 
  queryContent('posts').find()
)

// 配置 Fuse.js
const fuse = new Fuse(articles.value, {
  keys: ['title', 'description', 'body'],
  threshold: 0.3,
  includeMatches: true
})

// 监听搜索输入
watch(searchQuery, (newQuery) => {
  if (!newQuery) {
    searchResults.value = []
    return
  }
  searchResults.value = fuse.search(newQuery)
})

// 处理选择结果
const router = useRouter()
const handleSelect = (item) => {
  router.push(item._path)
  showResults.value = false
  searchQuery.value = ''
}

// 点击外部关闭搜索结果
onClickOutside(showResults, () => {
  showResults.value = false
})
</script> 