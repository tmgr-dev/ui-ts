<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#fff"
    text-color="#677B8F"
    active-text-color="#4f5d6c">
    <el-menu-item index="/">
      Task manager
    </el-menu-item>
    <el-menu-item index="/login">
      Login
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue';
  import { useRouter } from "vue-router";

  export default defineComponent({
    setup () {
      const router = useRouter()
      const activeIndex = ref('/')
      const handleSelect = (path: string) => {
        router.push(path)
      }

      return {
        activeIndex,
        handleSelect
      }
    }
  })

</script>