import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import axios from 'axios'

const app = createApp(App)
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
app.config.globalProperties.$axios = axios

app.config.globalProperties.$parseError = (data: string[]) => {
  if (data) {
    return Array.isArray(data) ? data.join(', ') : data;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: typeof axios;
  }
}

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
