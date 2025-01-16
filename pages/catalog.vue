<template>
  <div class="w-full max-w-full space-y-8">
    <!-- 页面标题 -->
    <div class="flex items-center justify-between">
      <div class="shrink-0">
        <h2 class="text-3xl font-bold text-primary">探索文章</h2>
        <p class="mt-2 text-muted-foreground">
          发现知识，分享见解
        </p>
      </div>
      
      <!-- 搜索框 -->
      <div class="w-72">
        <ContentSearch />
      </div>
    </div>

  <!-- 标签分类列表 -->
<ContentList path="/posts" :query="{ sort: [{ date: -1 }] }">
  <template #default="{ list }">
    <div class="space-y-10">
      <!-- 按标签分组文章 -->
      <div v-for="(articles, tag) in groupByTags(list)" :key="tag" class="space-y-4">
        <!-- 分类标题 -->
        <div class="flex items-center gap-2">
          <Badge variant="outline" class="px-3 py-1 text-primary">
            {{ tag }}
          </Badge>
          <div class="h-[1px] flex-1 bg-border"></div>
        </div>

        <!-- 文章卡片网格 -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card 
            v-for="post in articles" 
            :key="post._path"
            class="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 backdrop-blur-sm"
          >
             <!-- 修改这里的 :to 属性 -->
            <NuxtLink :to="post._path">
              <CardHeader>
                <CardTitle class="group-hover:text-primary transition-colors line-clamp-2 overflow-hidden text-ellipsis">
                  <template v-if="post.title.length > 20">
                    {{ post.title.substring(0, 20) + '...' }}
                  </template>
                  <template v-else>
                    {{ post.title }}
                  </template>
                </CardTitle>
                <CardDescription class="line-clamp-2 mt-2">
                  {{ post.description }}
                </CardDescription>
              </CardHeader>
              
              <CardFooter class="text-xs text-muted-foreground">
                <div class="flex items-center gap-2">
                  <CalendarIcon class="w-4 h-4" />
                  <time>{{ formatDate(post.date) }}</time>
                </div>
              </CardFooter>
            </NuxtLink>
          </Card>
        </div>
      </div>
    </div>
  </template>

  <template #empty>
    <Alert variant="default" class="max-w-2xl mx-auto">
      <AlertTitle>暂无文章</AlertTitle>
      <AlertDescription>
        我们正在准备精彩的内容，敬请期待...
      </AlertDescription>
    </Alert>
  </template>
</ContentList>
  </div>
</template>

<script setup lang="ts">
import { CalendarIcon } from 'lucide-vue-next'
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter 
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Alert,
  AlertTitle,
  AlertDescription 
} from '@/components/ui/alert'

// 确保有模板
definePageMeta({
  layout: 'default'
})

// 格式化日期
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 按标签分组文章
const groupByTags = (articles: any[]) => {
  const groups: Record<string, any[]> = {}
  
  articles.forEach(article => {
    const tags = article.tags || ['未分类']
    tags.forEach((tag: string) => {
      if (!groups[tag]) {
        groups[tag] = []
      }
      groups[tag].push(article)
    })
  })
  
  return groups
}
</script>

<style scoped>
/* 卡片悬浮效果 */
.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}
</style> 
