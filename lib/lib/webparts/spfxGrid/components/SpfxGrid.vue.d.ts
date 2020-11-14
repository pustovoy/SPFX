import { Vue } from 'vue-property-decorator';
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
}
//# sourceMappingURL=SpfxGrid.vue.d.ts.map