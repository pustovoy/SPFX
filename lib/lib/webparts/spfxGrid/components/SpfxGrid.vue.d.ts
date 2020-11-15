import { Vue } from 'vue-property-decorator';
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
export default class SpfxGrid extends Vue implements ISpfxGridProps {
    /**
     * implementing ISimpleWebPartProps interface
     */
    description: string;
    tilesPerLine: string;
    tileHeight: string;
    linkPropertiesArray: Array<LinkContainerModel>;
    protected gridSize: {
        key: number;
        text: string;
        value: string;
    }[];
    protected getGridClass(): string;
}
//# sourceMappingURL=SpfxGrid.vue.d.ts.map