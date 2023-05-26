// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/scss/global.scss',
        'boxicons/css/boxicons.min.css'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "@/assets/scss/base.scss"; @import "@/assets/scss/elements.scss"; @import "@/assets/scss/fonts.scss";',
                },
            },
        },
    },
})
