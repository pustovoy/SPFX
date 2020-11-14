<template>
    <div>
        {{ value }}
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: null
        },
        editable: {
            type: Boolean,
            default: true
        },
    }
}
</script>

<style scoped>
</style>
