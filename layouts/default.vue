<template>
    <div>
        <slot />
    </div>
</template>

<script>
import { useStore } from '~/stores/store.js';
const store = useStore();
export default {
    setup () {
        provide('store', store)
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>