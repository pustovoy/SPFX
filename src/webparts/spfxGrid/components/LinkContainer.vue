<template>
    <span>{{ value }}</span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: "LinkContainer"
})


export default class LinkContainer extends Vue {
  @Prop() value: string
}

</script>
