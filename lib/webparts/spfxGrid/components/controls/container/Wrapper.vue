<template>
    <span>{{ value }}</span>
</template>

<script>

export default {
    name: 'LinkContainer',
    components: {
        'form-control': Control
    },
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
