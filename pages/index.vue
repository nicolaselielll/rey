<template>
    <div class="home">
        <HomeHero />
    </div>
</template>

<script>
export default {
    setup () {
        useSeoMeta({
            ogImage: '/meta-img.jpg',
            twitterCard: "summary_large_image",
        });
        return {}
    }
}
</script>

<style lang="scss" scoped>
</style>