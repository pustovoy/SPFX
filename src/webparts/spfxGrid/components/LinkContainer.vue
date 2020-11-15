<template>
    <a
      :style="`height: ${height}px; background-color:${color}`"
      :href="link"
      class="container">
      <span>{{ value }}</span>
    </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: "LinkContainer"
})


export default class LinkContainer extends Vue {
  @Prop() value: string;
  @Prop() height: string;
  @Prop() color: string;
  @Prop() link: string;
}

</script>

<style scoped>
span {
  font-size: 1.2rem;
  font-weight: bold;
}

.container {
  cursor: pointer;
  text-decoration: none;
}

</style>

