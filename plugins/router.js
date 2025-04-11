export default defineNuxtPlugin(({ $router }) => {
    $router.options.scrollBehavior = (to, from, savedPosition) => {
        return { left: false, top: false };
    };
});