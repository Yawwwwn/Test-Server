<script setup lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';

let option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Egh']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [0, 230, 224, 218, 135, 147, 260, 666],
        type: 'line'
      }
    ],
    color:['blue']
  };

let pieOption = {
  title: {
    text: '苹果派饼状图',
    subtext: '苹果派',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '150px',
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: 'pornhub' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.2)'
        }
      }
    }
  ]
};

onMounted(() => {
  let graph = echarts.init(document.querySelector('.graph') as HTMLElement) 
  graph.setOption(option) 

  let piegraph = echarts.init(document.querySelector('.pie') as HTMLElement) 
   piegraph.setOption(pieOption) 
})

</script>

<template>
  <div class="graph"></div>
  <div class="pie"></div>
</template>

<style scoped>
  .graph{
    width: 1000px;
    height: 1000px;
    border: 1px solid black;
  }

  .pie{
    width: 500px;
    height: 500px;
    border: 1px solid black;
  }
</style>