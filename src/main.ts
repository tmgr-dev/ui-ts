import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import axios from 'axios'
import ErrorResponse from "@/models/ErrorResponse";

const app = createApp(App)
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
app.config.globalProperties.$axios = axios

app.config.globalProperties.$parseError = (data: string[]) => {
  if (data) {
    return Array.isArray(data) ? data.join(', ') : data;
  }
}

app.mixin({
  methods: {
    catchError (response: ErrorResponse) {
      if (Object.prototype.hasOwnProperty.call(response, 'data')
          && Object.prototype.hasOwnProperty.call(response.data, 'errors')) {
        const { message } = response.data
        this.errors = response.data.errors
        this.$message.error(message)
      } else if (Object.prototype.hasOwnProperty.call(response, 'status')) {
        this.$message.error(`Status code ${response.status}`);
      } else {
        this.$message.error('Oops, sorry... Something went wrong');
      }
    }
  }
})

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: typeof axios;
  }
}

app.provide('$axios', axios)

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
