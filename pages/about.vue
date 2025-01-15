<template>
  <div class="w-full max-w-4xl mx-auto space-y-12">
    <!-- 个人信息卡片 -->
    <Card class="backdrop-blur-sm border-border/50">
      <CardHeader>
        <div class="flex items-center gap-6">
          <Avatar class="w-24 h-24">
            <AvatarImage src="/images/avatar.jpg" alt="保安" />
            <AvatarFallback>保安</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle class="text-3xl font-bold text-primary mb-2">保安</CardTitle>
            <CardDescription class="text-lg">
              一个美丽的保安
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="flex items-center gap-2">
          <GithubIcon class="w-5 h-5" />
          <a 
            href="https://github.com/shilianmalaxiangguo" 
            target="_blank"
            class="text-muted-foreground hover:text-primary transition-colors"
          >
            @shilianmalaxiangguo
          </a>
        </div>
      </CardContent>
    </Card>

    <!-- 技术栈 -->
    <Card class="backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle class="text-2xl font-bold text-primary">技术栈</CardTitle>
        <CardDescription>项目主要使用的技术</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="tech in techStack" :key="tech.name" class="flex items-center gap-2 p-3 rounded-lg bg-card/50">
            <component :is="tech.icon" class="w-5 h-5 text-primary" />
            <div>
              <div>{{ tech.name }}</div>
              <div class="text-xs text-muted-foreground">{{ tech.description }}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- 结语 -->
    <Card class="backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle class="text-2xl font-bold text-primary">Last</CardTitle>
      </CardHeader>
      <CardContent>
        <blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground">
          <p>希望有富婆能看出保安的逞强</p>
          <footer class="mt-2 text-sm">
            —— 一个爱做梦的保安
          </footer>
        </blockquote>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { 
  GithubIcon, 
  Code2Icon,
  MonitorIcon,
  FileCodeIcon,
  PaintbrushIcon,
  FileTextIcon,
  BoxesIcon
} from 'lucide-vue-next'

// Card 组件导入
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent 
} from '@/components/ui/card'

// Avatar 组件导入
import { 
  Avatar,
  AvatarImage,
  AvatarFallback 
} from '@/components/ui/avatar'

// 技术栈配置
const techStack = [
  { 
    name: 'Nuxt 3', 
    icon: Code2Icon,
    description: '现代化的 Vue 框架'
  },
  { 
    name: 'Vue 3', 
    icon: MonitorIcon,
    description: '渐进式 JavaScript 框架'
  },
  { 
    name: 'TypeScript', 
    icon: FileCodeIcon,
    description: '类型安全的 JavaScript'
  },
  { 
    name: 'Tailwind CSS', 
    icon: PaintbrushIcon,
    description: '实用优先的 CSS 框架'
  },
  { 
    name: 'Shadcn Vue', 
    icon: BoxesIcon,
    description: '精美的 UI 组件库'
  },
  { 
    name: '@nuxt/content', 
    icon: FileTextIcon,
    description: '强大的文档处理引擎'
  }
]
</script>

<style scoped>
/* 卡片悬浮效果 */
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}
</style> 