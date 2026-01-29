<template>
  <div class="example reactive">
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
