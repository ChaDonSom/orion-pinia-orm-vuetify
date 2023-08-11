import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import axios from 'axios'
import '../css/app.css'
import { createORM } from 'pinia-orm'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
})

const pinia = createPinia().use(createORM())

app.use(router).use(pinia)

app.mount('#app')
