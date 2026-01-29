<template>
  <div class="home" v-if="showHome">
    <h2>学习路线</h2>
    <p>选择一个章节开始学习。</p>
    <ul class="chapter-list">
      <li v-for="c in chapters" :key="c.id" class="chapter-item">
        <router-link :to="c.path">{{ c.title }}</router-link>
        <p class="desc">{{ c.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const showHome = computed(() => route.path === '/')
const chapters = ref([
  {
    id: 1,
    title: '第1章 数据响应式与原理',
    path: '/chapter-1',
    description: '了解 Vue 的响应式系统，使用 reactive/ref/computed 等核心概念'
  }
])
</script>

<style scoped>
.home { padding: 20px; }
.chapter-list { list-style: none; padding: 0; }
.chapter-item { margin: 12px 0; padding: 12px; border: 1px solid #e5e5e5; border-radius: 6px; }
.chapter-item .desc { color: #555; margin: 6px 0 0; font-size: 0.9em; }
</style>
 
