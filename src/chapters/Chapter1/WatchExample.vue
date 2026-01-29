<template>
  <div class="example watch">
    <h4>Watch 示例</h4>
    <p>counter: {{ counter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const counter = ref(0)
watch(counter, (newV, oldV) => {
  console.log(`counter changed: ${oldV} -> ${newV}`)
})
function increment() { counter.value++ }
</script>

<style scoped>
.example { padding: 12px; border: 1px solid #eee; border-radius: 6px; }
</style>
