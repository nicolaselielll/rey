<template>
    <div class="wrapper">
        <UniversalSmoothWrapper class="desktop-view" v-if="!store.isTablet">
            <NuxtPage :transition="{
                css: transition.css,
                mode: transition.mode,
                name: transition.name,
                onBeforeEnter: transition.onBeforeEnter,
                onLeave: transition.onLeave,
                onEnter: transition.onEnter
            }"/>
        </UniversalSmoothWrapper>
    </div>
</template>

<script>
import { useStore } from '~/stores/store.js';

export default {
    setup () {
        const store = useStore();
        provide('store', store)
        const transition = useTransition();

        const setScreens = () => {
            if(window.innerWidth < 960) {
                store.isTablet = true
            } else {
                store.isTablet = false
            }
            if(window.innerWidth < 600) {
                store.isMobile = true
            } else {
                store.isMobile = false
            }

            store.isTouch = ('ontouchstart' in window || navigator.maxTouchPoints > 0) ? true : null
        }


        var timeout;
        const setResize = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setScreens()
            }, 250);
        }
    
        onMounted(() => {
            window.addEventListener('resize', setResize)
            setScreens()
        });

        return {
            store,
            transition
        }
    }
}
</script>

<style lang="scss" scoped>

</style>