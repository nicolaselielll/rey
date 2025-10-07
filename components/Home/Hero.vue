<template>
    <div class="hero dominant padding-x-md padding-bottom-md">
        <div class="desktop-hero flex flex-column justify-between height-100">
            <div class="hero-header grid grid-cols-12 gap-md align-center">
                <div class="logo-col">
                    <img 
                        src="/logo.svg" 
                        alt="Reinvent Yellow Logo" 
                        class="logo position-absolute top-md"
                    />
                </div>
                <div class="menu-col flex justify-between align-center">
                    <div class="hero-menu">
                        <span class="span-sm">Full website coming soon</span>
                    </div>
                    <span class="span-sm clock">{{ currentTime }}</span>
                </div>
            </div>
            <div class="heading-container grid grid-cols-12 padding-bottom-md">
                <h2 class="h2 left-heading" style="grid-column: 1 / 5;">Reinvent Yellow - <br>From Nordic roots to global reach.</h2>
                <h2 class="h2 right-heading" style="grid-column: 8 / 13;">We unite creativity, capital, and technology to build stories that travel.</h2>
            </div>
            <div class="details-container grid grid-cols-12 gap-md align-end">
                <div class="announcement-box dominant-bg padding-md flex-column justify-between primary" style="grid-column: 1 / 4;">
                    <p class="p-sm">Reinvent and Yellow have joined forces as a full-spectrum studio in distribution, production, and tech innovation.</p>
                    <div class="flex justify-between align-center">
                        <p class="p-sm">Sales / Financing / Tech / Story</p>
                        <div class="primary-bg" style="border-radius: 5rem; height: .625rem; width: .625rem"></div>
                    </div>
                </div>
                <div class="info-col flex-column justify-between height-100" style="grid-column: 8 / 13;">
                    <div class="list-container grid grid-cols-2 gap-md">
                        <p class="p-sm list-label">Reinvent Yellow <br></br>Subsidiaries</p>
                        <div class="list">
                            <p class="p-sm list-item underline pointer" @click="newTab('https://www.yellowfilm.fi/')">Yellow Film & TV</p>
                            <p class="p-sm list-item underline pointer" @click="newTab('https://reinvent.dk/')">Reinvent Sales</p>
                            <p class="p-sm list-item underline pointer" @click="newTab('https://newgrangepictures.com/')">Newgrange Pictures</p>
                            <p class="p-sm list-item underline pointer" @click="newTab('https://www.255pix.com/')">255 Pix</p>
                        </div>
                    </div>
                    <div class="list-container grid grid-cols-2 gap-md">
                        <p class="p-sm list-label">Locations (3)</p>
                        <div class="list">
                            <p class="p-sm list-item">Copenhagen, Dublin, Helsinki</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mobile-hero flex flex-column justify-between height-100">
            <div class="hero-header">
                <div class="logo-col">
                    <img 
                        src="/logo.svg" 
                        alt="Reinvent Yellow Logo" 
                        class="logo position-absolute top-md"
                    />
                </div>
            </div>
            <div class="hero-main">
                <div class="heading-wrapper flex-column gap-md">
                    <p class="p-sm">From Nordic roots <br>to global reach</p>
                    <h1 class="h1 heading" style="margin-bottom: 4rem;">Reinvent Yellow - <br>We unite creativity, capital, and technology to build stories that travel.</h1>
                </div>
                <div class="info-container border-top-dominant padding-top-md">
                    <div class="list-container grid grid-cols-2" style="margin-bottom: 2.5rem;">
                        <p class="p-sm list-label">Reinvent Yellow <br></br>Subsidiaries</p>
                        <div class="list">
                            <p class="p-sm list-item underline pointer" @click="newTab('https://www.yellowfilm.fi/')">Yellow Film & TV</p>
                            <p class="p-sm list-item underline pointer" @click="newTab('https://reinvent.dk/')">Reinvent Sales</p>
                            <p class="p-sm list-item underline pointer" @click="newTab('https://newgrangepictures.com/')">Newgrange Pictures</p>
                            <p class="p-sm list-item underline pointer" @click="newTab('https://www.255pix.com/')">255 Pix</p>
                        </div>
                    </div>
                    <div class="list-container grid grid-cols-2">
                        <p class="p-sm list-label">Locations</p>
                        <div class="list">
                            <p class="p-sm list-item">Copenhagen, Dublin, Helsinki</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-layer"></div>
        <UniversalReveal />
    </div>
</template>

<script>
export default {
    setup () {
        const currentTime = ref('')
        let timeInterval = null

        const updateTime = () => {
            const now = new Date()
            const hours = now.getHours().toString().padStart(2, '0')
            const minutes = now.getMinutes().toString().padStart(2, '0')
            currentTime.value = `${hours}:${minutes}`
        }

        onMounted(() => {
            updateTime() // Set initial time
            timeInterval = setInterval(updateTime, 1000) // Update every second
        })

        onUnmounted(() => {
            if (timeInterval) {
                clearInterval(timeInterval)
            }
        })

        return {
            currentTime
        }
    }
}
</script>

<style lang="scss" scoped>
.hero {
    height: 100svh; 
    position: relative;

    .bg-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(#000, .1);
        z-index: 1;
        opacity: 0;
    }

    .desktop-hero {
        position: relative;
        z-index: 2;
        opacity: 0;
        @include bp-lg {
            display: none;
        }
        .hero-header {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            height: 2rem;
    
            .logo-col {
                .logo {
                    width: 5.5rem;
                }
            }
    
            .menu-col {
                grid-column: 8 / 13
            }
        }
    
        .details-container {
            .announcement-box {
                height: 10rem;
            }
        }
    }

    .mobile-hero {
        position: relative;
        z-index: 2;
        opacity: 0;
        .hero-header {
            .logo {
                width: 5rem;
            }
        }

        .hero-main {
        }
    }
}
</style>