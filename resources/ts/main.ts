import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import axios from 'axios'
import { createORM } from 'pinia-orm'
import 'vuetify/styles'
import '../css/app.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { dark, light } from './vuetify-themes'
import { Orion } from '@tailflow/laravel-orion/lib/orion'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Orion.init(import.meta.env.VITE_APP_URL, 'api')
Orion.setToken('access-token-here')

const app = createApp(App)

const router = createRouter({
    history: createWebHashHistory(),
})

const pinia = createPinia().use(createORM())

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light',
        themes: {
            light, dark
        },
    },
})

app.use(router).use(pinia).use(vuetify)

app.mount('#app')
