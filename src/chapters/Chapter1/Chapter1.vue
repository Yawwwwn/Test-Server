<template>
  <div class="chapter">
    <h3>第1章：数据响应式与原理</h3>
    <p>本章包含若干子示例，均为响应式数据的演示组件。</p>
    <nav class="subnav">
      <router-link to="reactive">Reactive</router-link>
      <router-link to="ref">Ref</router-link>
      <router-link to="computed">Computed</router-link>
      <router-link to="to-refs">ToRefs</router-link>
      <router-link to="watch">Watch</router-link>
      <router-link to="shallow-reactive">ShallowReactive</router-link>
    </nav>
    <section class="exercises">
      <router-view />
    </section>
  </div>
  </template>

<script setup lang="ts"></script>

<style scoped>
.chapter { padding: 16px; }
.subnav { display: flex; gap: 12px; margin: 12px 0; }
.subnav a { padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; text-decoration: none; color: #333; }
.exercises { display: grid; grid-template-columns: 1fr; gap: 16px; }
</style>
