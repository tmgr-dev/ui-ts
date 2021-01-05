<template>
  <el-container>
    <el-row class="block">

      <el-col :span="10">
        <div
          id="tilt"
          class="tilt"
          @mousemove="mouseMove"
          @mouseout="mouseOut">
          <img src="@/assets/img/login.webp" alt="">
        </div>
      </el-col>

      <el-col :span="10" :offset="4">
        <el-form :model="form" label-position="left">
          <el-form-item :error="$parseError(errors.email)">
            <el-input
              type="email"
              placeholder="Email"
              v-model="form.email"
            />
          </el-form-item>

          <el-form-item :error="$parseError(errors.password)">
            <el-input
              type="password"
              placeholder="Password"
              v-model="form.password"
            />
          </el-form-item>

          <el-form-item>
            <el-checkbox v-model="form.remember">Remember me</el-checkbox>
          </el-form-item>

          <el-button
            round
            type="primary"
            @click="login">
            Login
          </el-button>

        </el-form>
      </el-col>

    </el-row>
  </el-container>
</template>

<script lang="ts">
  import {
    reactive,
    getCurrentInstance,
    defineComponent
  } from 'vue';
  import initTilt from '@/use/TiltElement'
  import catchError from "@/use/CatchError";

  interface LoginForm {
    email: string;
    password: string;
    remember: boolean;
  }

  export default defineComponent({
    setup() {
      const internalInstance = getCurrentInstance()
      const $axios = internalInstance?.appContext.config.globalProperties.$axios
      const form: LoginForm = reactive({
        email: '',
        password: '',
        remember: false
      })
      let errors = reactive({})

      const login = async () => {
        try {
          await $axios.post('auth/login', form)
        } catch (e) {
          errors = catchError(e?.response)
        }
      }

      return {
        form,
        errors,
        login,
        ...initTilt()
      }
    }
  })
</script>

<style scoped>
  .el-container {
    height: 100vh;
    /*background: linear-gradient(-135deg,#c850c0,#4158d0);*/
    background: url(../assets/img/bg-01.jpg) center center/cover no-repeat;
  }

  .block {
    background: #fff;
    width: 800px;
    border-radius: 5px;
    margin: auto;
    padding: 4rem;
  }

  .el-button {
    width: 100%;
  }
</style>