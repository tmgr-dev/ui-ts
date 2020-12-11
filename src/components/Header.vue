<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#fff"
    text-color="#677B8F"
    active-text-color="#4f5d6c">
    <el-menu-item index="1">
        Task manager
    </el-menu-item>
    <el-menu-item index="2">
        Login
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const activeIndex = ref('1')
  const handleSelect = (key: string, data: object) => {
    console.log(key, data)
  }
</script>