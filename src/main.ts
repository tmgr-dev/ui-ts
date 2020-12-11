import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import axios from 'axios'

const app = createApp(App)
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
app.config.globalProperties.$axios = axios

app.config.globalProperties.$parseError = (data: string[] | string) => {
  if (data) {
    return Array.isArray(data) ? data.join(', ') : data;
  }
}

app.provide('$axios', axios)

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
