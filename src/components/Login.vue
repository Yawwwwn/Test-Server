<script setup lang='ts'>

</script>

<template>
    <div>login</div>
    <div @click="() => $router.push('register')">跳转到:注册页面</div>
    <RouterLink to="echarts">跳转到:测试Echarts</RouterLink>
</template>

<style scoped>

</style>