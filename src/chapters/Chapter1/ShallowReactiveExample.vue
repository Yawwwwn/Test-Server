<template>
  <div class="example shallow">
    <div class="intro">ShallowReactive ( shallowReactive() ): 与 reactive 类似，但只对顶层属性进行代理的响应式对象。</div>
    <h4>ShallowReactive 示例</h4>
    <p>nested.a: {{ data.nested.a }}</p>
    <button @click="data.nested.a++">嵌套对象自增</button>
  </div>
</template>

<script setup lang="ts">
import { shallowReactive } from 'vue'
const data = shallowReactive({ nested: { a: 0 } })
</script>

<style scoped>
.example { padding: 12px; border: 1px solid #eee; border-radius: 6px; }
</style>
