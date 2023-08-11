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
import { dark, light } from './vuetify-themes'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

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
