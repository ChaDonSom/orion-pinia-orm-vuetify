import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'

export default defineConfig({
    plugins: [
        VueRouter({
            routesFolder: 'resources/ts/routes',
            dts: 'resources/ts/typed-router.d.ts',
        }),
        vue(),
        laravel({
            input: ['resources/ts/main.ts'],
            refresh: true,
        }),
    ],
})
