<template>
    <div class="reveal dominant-bg flex align-center justify-center">
        <div class="reveal-text-wrapper primary overflow-hidden padding-y-sm">
            <span class="span-sm text-align-center reveal-text">Reinvent Yellow</span>
            <div class="anim-text-container overflow-hidden">
                <div class="anim-text-wrapper reveal-text">
                    <span class="span-sm text-align-center swap-text">Sales company</span>
                    <span class="span-sm text-align-center swap-text">Financing partner</span>
                    <span class="span-sm text-align-center swap-text">Tech innovator</span>
                    <span class="span-sm text-align-center swap-text">Story teller</span>
                </div>
            </div>
        </div>
        <div class="reveal-box">
            <div class="reveal-image-container">
                <video class="reveal-video" autoplay muted loop playsinline preload="auto">
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

        let textWrapper = null  
        let animTexts = null
        let textRemHeight = null
        let textHeight = null
        let textContainer = null
        let loop = 0
        
        const getRem = (px) => px / parseFloat(getComputedStyle(document.documentElement).fontSize)

        const resize = () => {
            if (!textContainer || !animTexts) return
            
            animTexts = document.querySelectorAll('.swap-text')
            if (animTexts.length > 0) {
                textHeight = animTexts[0].clientHeight
                textRemHeight = getRem(textHeight)
                gsap.set(textContainer, { height: textHeight })
                
                // Reset wrapper position based on current loop
                const currentOffset = -textRemHeight * loop
                gsap.set(textWrapper, { y: currentOffset + 'rem' })
            }
        }

        const initTextSwap = () => {
            textContainer = document.querySelector('.anim-text-container')
            textWrapper = document.querySelector('.anim-text-wrapper')
            animTexts = document.querySelectorAll('.swap-text')
            
            if (!textContainer || !textWrapper || !animTexts.length) return
            
            textHeight = animTexts[0].clientHeight
            gsap.set(textContainer, { height: textHeight, opacity: 1 })
            textRemHeight = getRem(textHeight)
            
            // Add resize listener
            window.addEventListener('resize', resize)
        }

        const startTextSwap = async() => {
            if(loop >= animTexts.length - 1) return;
            gsap.to(textWrapper, { 
                y: () => '-=' + textRemHeight + 'rem',
                duration: .5,
                ease: 'expo',
                onComplete: () => {
                    loop++
                    startTextSwap()
                }
            })
        }

        const reveal = async () => {
            const tl = gsap.timeline()
            await nextTick()
            initTextSwap()
            
            // Set initial state for video
            gsap.set('.reveal-video', { scale: 4 })
            
            tl.to('.reveal-image-container', {
                duration: 2,
                ease: 'expo.inOut',
                y: 0,
            })
            tl.to('.reveal-text-wrapper', {
                duration: 2,
                ease: 'expo.inOut',
                y: 0,
                opacity: 1,
                onComplete: () => startTextSwap()
            }, '<')
            tl.to('.accent-curtain', {
                duration: 2,
                ease: 'expo.inOut',
                y: '-100%',
                onStart: () => {
                    // Start video when curtain animation begins
                    const video = document.querySelector('.reveal-video')
                    if (video) {
                        video.play().catch(err => {
                            console.log('Video play failed during curtain animation:', err)
                        })
                    }
                }
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
            
            const video = document.querySelector('.reveal-video')
            if (video) {
                // Force load the video but don't play yet
                video.load()
                console.log('Video loaded, waiting for curtain animation to start playback')
                video.pause()
            }
            
            reveal()
        })

        onUnmounted(() => {
            // Clean up resize listener
            window.removeEventListener('resize', resize)
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

    .reveal-text-wrapper {
        display: flex;
        justify-content: space-around;
        width: 100%;
        align-items: center;
        opacity: 0;
        transform: translateY(1rem);

        @include bp-lg {
            flex-direction: column;
            height: 100%;
        }

        .anim-text-container {
            position: relative;
            overflow: hidden;
    
            .anim-text-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                
                span {
                    line-height: 1.2;
                    text-align: center
                }
            }
        }
    }

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