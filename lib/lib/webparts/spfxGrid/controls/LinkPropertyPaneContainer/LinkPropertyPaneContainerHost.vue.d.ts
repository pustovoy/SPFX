import { Vue } from 'vue-property-decorator';
import { ILinkPropertyPaneContainerHostProps } from './ILinkPropertyPaneContainerHost';
/**
 * Class-component
 */
export default class LinkPropertyPaneContainerHost extends Vue implements ILinkPropertyPaneContainerHostProps {
    label: string;
    value?: string;
    uniqueKey: string;
    onValueChanged: (value: string) => void;
    /**
     * reactive properties of the component
     */
    data(): any;
    /**
     * Unique input id
     */
    readonly inputId: string;
    /**
     * input onchange event handler
     * @param event
     */
    private _onChange;
}
//# sourceMappingURL=LinkPropertyPaneContainerHost.vue.d.ts.map