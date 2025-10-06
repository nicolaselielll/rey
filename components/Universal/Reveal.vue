<template>
    <div class="reveal dominant-bg">
        <div class="reveal-box">
            <div class="reveal-image-container">
                <video class="reveal-video" autoplay muted loop>
                    <source src="/media/reel.mov" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="accent-curtain accent-bg"></div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'
export default {
    setup () {

        const reveal = () => {
            const tl = gsap.timeline()
            
            // Set initial state for video
            gsap.set('.reveal-video', { scale: 4 })
            
            tl.to('.reveal-image-container', {
                duration: 2,
                ease: 'expo.inOut',
                y: 0,
            })
            tl.to('.accent-curtain', {
                duration: 2,
                ease: 'expo.inOut',
                y: '-100%',
            }, '-=.6')
            tl.to('.reveal-video', {
                duration: 2,
                ease: 'expo.inOut',
                scale: 1,
            }, '<')
            tl.to('.reveal-box', {
                duration: 1.4,
                ease: 'expo.inOut',
                height: '100%',
                delay: '.4',
                width: '100%',
            })
            tl.to('.bg-layer', {
                opacity: 1,
                duration: 1.4,
                ease: 'expo.inOut'
            }, '-=1.4')
            tl.to('.desktop-hero, .mobile-hero', {
                opacity: 1,
                duration: 1.4,
                delay: .4,
                ease: 'expo'
            })
        }

        onMounted(async () => {
            await nextTick()
            
            // Start video playback
            const video = document.querySelector('.reveal-video')
            if (video) {
                video.play().catch(err => {
                    console.log('Video autoplay failed:', err)
                })
            }
            
            reveal()
        })

        return {}
    }
}
</script>

<style lang="scss" scoped>
.reveal {
    height: 100svh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    .reveal-box {
        width: 12.875rem;
        height: 7.6875rem;
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @include bp-md {
            width: 7rem;
            height: 12rem;
        }
        
        .reveal-image-container {
            position: relative;
            height: 100%;
            width: 100%;
            transform: translateY(100%);
            overflow: hidden;

            .reveal-video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .accent-curtain {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>