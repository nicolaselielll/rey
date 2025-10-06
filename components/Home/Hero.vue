<template>
    <div class="hero dominant padding-x-md padding-bottom-md bg-default">
        <div class="bg-layer"></div>
        <div class="desktop-hero flex flex-column justify-between height-100">
            <div class="hero-header grid grid-cols-12 gap-md align-center">
                <div class="logo-col">
                    <img 
                        src="/logo.svg" 
                        alt="Reinvent Yellow Logo" 
                        class="logo position-absolute left-md top-md"
                    />
                </div>
                <div class="menu-col flex justify-between align-center">
                    <div class="hero-menu">
                        <span class="span-sm">hello@reinventyellow.com</span>
                    </div>
                    <span class="span-sm">Contact</span>
                </div>
            </div>
            <div class="heading-container border-bottom-dominant grid grid-cols-12 padding-bottom-md">
                <h2 class="h2 left-heading" style="grid-column: 1 / 5;">Reinvent Yellow - <br></br>From Nordic roots to international horizons</h2>
                <h2 class="h2 right-heading" style="grid-column: 8 / 13;">We unite creativity, capital, and technology to build stories that travel.</h2>
            </div>
            <div class="details-container grid grid-cols-12 gap-md align-end">
                <div class="announcement-box dominant-bg padding-md flex-column justify-between primary" style="grid-column: 1 / 4;">
                    <p class="p-sm">Yellow Studios and Reinvent Studios Unite to Form a Nordic Powerhouse in Film and TV</p>
                    <div class="flex justify-between align-center">
                        <p class="p-sm">Full website coming soon</p>
                        <div class="primary-bg" style="border-radius: 5rem; height: .625rem; width: .625rem"></div>
                    </div>
                </div>
                <div class="info-col flex-column justify-between height-100" style="grid-column: 8 / 13;">
                    <div class="list-container grid grid-cols-2 gap-md">
                        <p class="p-sm list-label">Reinvent Yellow <br></br>Companies</p>
                        <div class="list">
                            <p class="p-sm list-item underline pointer">Yellow Film & TV</p>
                            <p class="p-sm list-item underline pointer">Reinvent Studios</p>
                            <p class="p-sm list-item underline pointer">Newgrange Pictures</p>
                            <p class="p-sm list-item underline pointer">255 Pix</p>
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
                        class="logo position-absolute left-md top-md"
                    />
                </div>
            </div>
            <div class="hero-main">
                <h1 class="h1 heading" style="margin-bottom: 5rem;">Reinvent Yellow - From Nordic roots to international horizons — we unite creativity, capital, and technology to build stories that travel.</h1>
                <div class="info-container">
                    <div class="list-container grid grid-cols-2 gap-md" style="margin-bottom: 2.5rem;">
                        <p class="p-sm list-label">Reinvent Yellow <br></br>Companies</p>
                        <div class="list">
                            <p class="p-sm list-item underline pointer">Yellow Film & TV</p>
                            <p class="p-sm list-item underline pointer">Reinvent Studios</p>
                            <p class="p-sm list-item underline pointer">Newgrange Pictures</p>
                            <p class="p-sm list-item underline pointer">255 Pix</p>
                        </div>
                    </div>
                    <div class="list-container grid grid-cols-2 gap-md">
                        <p class="p-sm list-label">Contact us</p>
                        <div class="list">
                            <p class="p-sm list-item underline pointer">hello@reinventyellow.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.hero {
    height: 100svh; 
    background-image: url('/images/pohjoisen_tahti.jpg');

    .bg-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 0;
    }

    .desktop-hero {
        position: relative;
        z-index: 1;
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
        z-index: 1;
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