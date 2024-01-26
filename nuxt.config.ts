// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: '%s - Nuxt App',
            title: 'Nuxt App',
            meta: [
                { charset: 'utf-8' },
                { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
                { hid: 'description', name: 'description', content: 'Description' }
            ],
            link: [
                { rel: 'icon', type: 'image/svg', href: '/icons/star.svg' },
                { href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css', rel: 'stylesheet' }
            ],
            script: [
                { src: 'https://unpkg.com/phosphor-icons', type: 'text/javascript' },
            ]
        }
    },
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL
        }
    },
    modules: [
        '@pinia/nuxt',
    ],
    build: {
        transpile: ["gsap"],
    },
    css: ['@/assets/scss/fonts.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:` 
                        @import "@/assets/scss/base.scss"; 
                        @import "@/assets/scss/elements.scss";
                        @import "@/assets/scss/global.scss"; 
                        `,
                },
            },
        },
    },
})
