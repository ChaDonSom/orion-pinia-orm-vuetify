import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import axios from 'axios'
import '../css/app.css'
import { createORM } from 'pinia-orm'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
})

const pinia = createPinia().use(createORM())

const vuetify = createVuetify({
    components,
    directives,
})

app.use(router).use(pinia).use(vuetify)

app.mount('#app')
