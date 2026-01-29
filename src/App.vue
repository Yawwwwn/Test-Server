<template>
  <div id="app">
    <header class="site-header">
      <div class="brand">Vue 学习路线</div>
      <nav class="nav">
        <router-link to="/">主页</router-link>
        <router-link to="/chapter-1">第一章</router-link>
      </nav>
    </header>
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style>
:root {
  --bg: #f6f8fb;
  --card: #ffffff;
  --text: #1f2d3d;
  --muted: #5c6b7a;
  --accent: #42b983;
}

#app {
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
}
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: linear-gradient(135deg, #4f6cff 0%, #8a5cff 100%);
  color: white;
}
.site-header .brand { font-weight: 700; font-size: 1.2rem; letter-spacing: .5px; }
.site-header .nav { display: flex; gap: 12px; }
.site-header .nav a { color: white; text-decoration: none; opacity: .95; padding: 6px 12px; border-radius: 6px; }
.site-header .nav a:hover { background: rgba(255,255,255,.15); }
.content { padding: 24px; max-width: 1100px; margin: 0 auto; }
</style>
