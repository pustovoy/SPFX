<template>
    <div :class="$style.ImageUrl">
        <label :for="inputId" class="ms-Label" :class="$style.label">{{label}}</label>
        <div class="ms-TextField-fieldGroup" :class="$style.inputWrapper">
            <input type="text" v-model="inputValue" :id="inputId" v-on:change="_onChange" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide } from 'vue-property-decorator';

import {
    ILinkPropertyPaneContainerHostProps
} from './ILinkPropertyPaneContainerHost';

/**
 * Class-component
 */
@Component
export default class LinkPropertyPaneContainerHost extends Vue implements ILinkPropertyPaneContainerHostProps {
    @Prop()
    public label: string;

    @Prop()
    public value?: string;

    @Prop()
    public uniqueKey: string;

    @Prop()
    public onValueChanged: (value: string) => void;

    /**
     * reactive properties of the component
     */
    public data(): any {
        return {
            // text box value
            inputValue: this.value
        };
    }

    /**
     * Unique input id
     */
    public get inputId(): string {
        return `Input${this.uniqueKey}`;
    }

    /**
     * input onchange event handler
     * @param event
     */
    private _onChange(event) {
        if (this.onValueChanged) {
            this.onValueChanged(this.$data.inputValue);
        }
    }
}
</script>

<style lang="scss" module>
@import '~@microsoft/sp-office-ui-fabric-core/dist/sass/_SPFabricCore.scss';

$inputBorder: "[theme:inputBorder, default: #a6a6a6]";
$inputBorderHovered: "[theme:inputBorderHovered, default: #212121]";

.LinkPaneContainer {
    .label {
        display: block;
        padding: 5px 0;
    }

    .inputWrapper {
        border: 1px solid;
        border-color: $inputBorder;
        height: 32px;
        display: flex;

        &:hover {
            border-color: $inputBorderHovered;
        }

        & > input {
            border: none;
            padding: 0 12px;
            width: 100%;
        }
    }
}
</style>

