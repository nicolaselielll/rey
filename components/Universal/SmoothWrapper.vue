<template>
    <div id="smooth-wrapper" ref="{main}">
        <div id="smooth-content">
            <div class="slot-wrapper">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default {
    setup () {
        const store = inject('store')
        const route = useRoute()
        
        const main = ref();
        let ctx;
        var smoother;

        const setSmoother = () => {
            setTimeout(() => {
                if(!store.isTablet) {
                    ctx = gsap.context(() => {
                        smoother = ScrollSmoother.create({
                            smooth: 1.2,
                            speed: 2.6,
                            effects: true,
                        });
                        store.smoother = smoother;
                    }, main.value);
                }
            }, 100)
        }

        watch(() => route.fullPath, () => {
            if(store.isTablet) return;
            smoother.effects().forEach((effect) => effect.kill());
            smoother.effects('[data-lag], [data-speed]');
            ScrollTrigger.refresh()
        })

        var timeout;
        const setResize = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setSmoother()
            }, 250);
        }

        onMounted(() => {
            setTimeout(() => {
                setSmoother()
                window.addEventListener('resize', setResize)
            }, 100)
        })

        onUnmounted(() => {
            if(ctx) ctx.revert();
        });

        return {
            main
        }
    }
}
</script>

<style lang="scss" scoped>

</style>