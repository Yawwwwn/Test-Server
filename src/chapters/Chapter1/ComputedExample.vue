<template>
  <div class="example computed">
    <h4>Computed 示例</h4>
    <p>base: {{ data.num }}, triple: {{ triple }}</p>
    <button @click="data.num++">自增 base</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
const data = reactive({ num: 1 })
const triple = computed(() => data.num * 3)
</script>

<style scoped>
.example { padding: 12px; border: 1px solid #eee; border-radius: 6px; }
</style>
