<template>
  <div class="home">
    <h2>首页</h2>
    <p>计数：{{ counter.count }}</p>
    <button @click="counter.increment">增加</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<style scoped>
.home {
  padding: 16px;
}
</style>
