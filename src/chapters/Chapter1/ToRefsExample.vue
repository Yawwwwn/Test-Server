<template>
  <div class="example torefs">
    <h4>ToRefs 示例</h4>
    <p>name: {{ name }}, count: {{ count }}</p>
    <button @click="state.count++">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
const state = reactive({ name: 'Vue', count: 0 })
const { name, count } = toRefs(state)
</script>

<style scoped>
.example { padding: 12px; border: 1px solid #eee; border-radius: 6px; }
</style>
