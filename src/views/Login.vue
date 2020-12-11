<template>
  <!--<input type="text" v-model="form.email">
  {{ form.email }}-->
  <el-row>
    <el-col :span="8" :offset="8">
      <el-form ref="form" :model="form" label-position="left">
        <el-form-item label="Email">
          <el-input type="email" v-model="form.email" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="password" v-model="form.password" />
        </el-form-item>
        <el-form-item label="Remember me">
          <el-switch v-model="form.remember"></el-switch>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue'

  interface LoginForm {
    email: string;
    password: string;
    remember: boolean;
  }

  export default defineComponent({
    name: 'Login',
    setup () {
      const form: LoginForm = reactive({
        email: '',
        password: '',
        remember: false
      })

      const test = ref('hello')

      const onSubmit = () => {
        alert('submit')
      }

      return {
        form,
        test,
        onSubmit
      }
    }
  })
</script>