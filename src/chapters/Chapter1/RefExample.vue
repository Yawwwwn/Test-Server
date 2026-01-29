<template>
  <div class="example ref">
    <h4>Ref 示例</h4>
    <p>number: {{ number }}</p>
    <button @click="increment">递增</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const number = ref(0)
function increment() {
  number.value++
}
</script>

<style scoped>
.example { padding: 12px; border: 1px solid #eee; border-radius: 6px; }
</style>
