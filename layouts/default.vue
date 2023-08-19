<template>
    <div class="wrapper">
        <UniversalSmoothWrapper class="desktop-view" v-if="!store.isTablet">
            <slot />
        </UniversalSmoothWrapper>
        <div v-else class="touch-view">
            <div class="slot-wrapper">
                <slot  />
            </div>
            <UniversalFooter class="footer" />
        </div>
    </div>
</template>

<script>
import { useStore } from '~/stores/store.js';

export default {
    setup () {
        const store = useStore();
        provide('store', store)

        const setScreens = () => {
            if(window.screen.width < 960) {
                store.isTablet = true
            } else {
                store.isTablet = false
            }
            if(window.screen.width < 600) {
                store.isMobile = true
            } else {
                store.isMobile = false
            }
        }

        const setResize = () => {
            var timeout;
            window.addEventListener('resize', () => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    setScreens()
                }, 250);
            })
        }
    
        onMounted(() => {
            window.addEventListener('resize', setResize())
        });

        onUnmounted(() => {
            ctx.revert();
        });

        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>