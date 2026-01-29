<template>
  <div class="example reactive">
    <div class="intro">Reactive ( reactive() ): Vue 3 提供的用于创建响应式对象的 API，能够让对象属性的变化自动驱动模板更新。</div>
    <h4>Reactive 示例</h4>
    <p>name: {{ state.name }}</p>
    <p>count: {{ state.count }}</p>
    <button @click="state.count++">递增</button>
    <button @click="state.name = 'Vue'">重置名称</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const state = reactive({ name: 'Vue', count: 0 })
</script>

<style scoped>
.example { padding: 12px; border: 1px solid #eee; border-radius: 6px; }
</style>
