<template>
    <div :class="$style.SpfxGrid">
        <div
          :class="`${$style.grid} ${$style[getGridClass()]}`">
          <link-container
            v-for="(item, index) in linkPropertiesArray"
            :key="itemKey ? item[itemKey] : index"
            :value="item.value"
            :class="$style.link"
            :height="tileHeight"
            :color="item.color"
            :link="item.link" />
        </div>

    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import LinkContainer from './LinkContainer.vue';
import LinkContainerModel from '../models/link-model';

/**
 * Component's properties
 */
export interface ISpfxGridProps {
    description: string;
}

/**
 * Class-component
 */
@Component({
  components: {
    LinkContainer
  }
})
export default class SpfxGrid extends Vue implements ISpfxGridProps {

    /**
     * implementing ISimpleWebPartProps interface
     */
    @Prop() public description: string;
    @Prop() public tilesPerLine: string;
    @Prop() public tileHeight: string;
    @Prop() public linkPropertiesArray: Array<LinkContainerModel>;

    protected gridSize: { key: number, text: string, value: string }[] = [
      { key: 1, text: "One", value: 'grid-one' },
      { key: 2, text: "Two", value: 'grid-two' },
      { key: 3, text: "Three", value: 'grid-three' },
      { key: 4, text: "Four", value: 'grid-four' },
      { key: 5, text: "Five", value: 'grid-five' },
      { key: 6, text: "Six", value: 'grid-six' }
    ];

    protected getGridClass() {
      console.log(this.tilesPerLine);
      return this.gridSize.find(el => el.key === parseInt(this.tilesPerLine)).value;
    }

}
</script>

<style lang="scss" module>
@import '~@microsoft/sp-office-ui-fabric-core/dist/sass/_SPFabricCore.scss';

.SpfxGrid {
  .container {
    max-width: 700px;
    margin: 0px auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .row {
    @include ms-Grid-row;
    @include ms-fontColor-white;
    background-color: $ms-color-themeDark;
    padding: 20px;
  }

  .column {
    @include ms-Grid-col;
    @include ms-lg10;
    @include ms-xl8;
    @include ms-xlPush2;
    @include ms-lgPush1;
  }

  .title {
    @include ms-font-xl;
    @include ms-fontColor-white;
  }

  .subTitle {
    @include ms-font-l;
    @include ms-fontColor-white;
  }

  .description {
    @include ms-font-l;
    @include ms-fontColor-white;
  }

  .button {
    // Our button
    text-decoration: none;
    height: 32px;

    // Primary Button
    min-width: 80px;
    background-color: $ms-color-themePrimary;
    border-color: $ms-color-themePrimary;
    color: $ms-color-white;

    // Basic Button
    outline: transparent;
    position: relative;
    font-family: "Segoe UI WestEuropean","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: $ms-font-size-m;
    font-weight: $ms-font-weight-regular;
    border-width: 0;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    padding: 0 16px;

    .label {
      font-weight: $ms-font-weight-semibold;
      font-size: $ms-font-size-m;
      height: 32px;
      line-height: 32px;
      margin: 0 4px;
      vertical-align: top;
      display: inline-block;
    }
  }

  .grid {
    display: grid;
    grid-gap: 5px;
  }

  .grid-one {
    grid-template-columns: 100%;
  }

  .grid-two {
    grid-template-columns: 1fr 1fr;
  }

  .grid-three {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .grid-four {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .grid-five {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  .grid-six {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
  }
}
</style>


