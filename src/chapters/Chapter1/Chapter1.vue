<template>
  <div class="chapter">
    <button class="back" @click="goHome">返回首页</button>
    <h3>第1章：数据响应式与原理</h3>
    <p>本章包含若干子示例，均为响应式数据的演示组件。</p>
    <nav class="subnav">
      <router-link to="/chapter-1/reactive">Reactive</router-link>
      <router-link to="/chapter-1/ref">Ref</router-link>
      <router-link to="/chapter-1/computed">Computed</router-link>
      <router-link to="/chapter-1/to-refs">ToRefs</router-link>
      <router-link to="/chapter-1/watch">Watch</router-link>
      <router-link to="/chapter-1/shallow-reactive">ShallowReactive</router-link>
    </nav>
    <section class="exercises">
      <router-view />
    </section>
  </div>
  </template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function goHome(){ router.push('/') }
</script>

<style scoped>
.chapter { padding: 16px; }
.back { margin-bottom: 12px; padding: 6px 12px; border-radius: 4px; background: #f3f4f6; border: 1px solid #ddd; cursor: pointer; }
.subnav { display: flex; gap: 12px; margin: 12px 0; }
.subnav a { padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; text-decoration: none; color: #333; }
.exercises { display: grid; grid-template-columns: 1fr; gap: 16px; }
</style>
