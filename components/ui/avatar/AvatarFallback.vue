<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template> 