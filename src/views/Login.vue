<template>
  <el-container>
    <el-row class="block">

      <el-col :span="10">
        <div
          ref="tilt"
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
            <el-input type="password" placeholder="Password" v-model="form.password" />
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
    defineComponent
  } from 'vue'
  import CatchError from "@/mixins/CatchError";

  interface LoginForm {
    email: string;
    password: string;
    remember: boolean;
  }

  export default defineComponent({
    mixins: [
      CatchError
    ],
    data: () => ({
      tilt: null,
      widthObject: 0,
      heightObject: 0
    }),
    methods: {
      mouseMove (e) {
        if (!this.tilt) {
          return
        }
        const xVal = e.layerX
        const yVal = e.layerY
        const yRotation = 20 * ((xVal - this.widthObject / 2) / this.widthObject)
        const xRotation = -20 * ((yVal - this.heightObject / 2) / this.heightObject)
        this.tilt.style.transform = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
      },
      mouseOut () {
        this.tilt.style.transform = 'perspective(500px) rotateX(0) rotateY(0)'
      },
      async login () {
        try {
          await this.$axios.post('auth/login', this.form)
        } catch ({ response }) {
          this.catchError(response)
          console.log(this.errors)
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.tilt = this.$refs.tilt
        this.widthObject = this.tilt.clientWidth
        this.heightObject = this.tilt.clientHeight
      })
    },
    setup() {
      const form: LoginForm = reactive({
        email: '',
        password: '',
        remember: false
      })

      const errors = {}

      return {
        form,
        errors
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