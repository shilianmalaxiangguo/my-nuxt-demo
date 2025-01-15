<template>
  <div class="w-full max-w-full">
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-white">文章目录</h2>
      <ContentSearch />
    </div>
    
    <!-- 文章列表 -->
    <ContentList path="/posts" :query="{ sort: [{ date: -1 }] }">
      <template #default="{ list }">
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article 
            v-for="post in list" 
            :key="post._path"
            class="p-6 rounded-lg backdrop-blur-md bg-background/30 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <NuxtLink :to="post._path">
              <h3 class="text-lg font-medium mb-2">{{ post.title }}</h3>
              <p class="text-sm text-muted-foreground mb-4">{{ post.description }}</p>
              <div class="flex items-center text-xs text-muted-foreground">
                <time>{{ new Date(post.date).toLocaleDateString() }}</time>
              </div>
            </NuxtLink>
          </article>
        </div>
      </template>

      <template #empty>
        <div class="text-center py-8">
          <p class="text-muted-foreground">暂无文章</p>
        </div>
      </template>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
div {
  @apply break-words;
}
</style> 