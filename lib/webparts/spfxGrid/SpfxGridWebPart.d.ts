import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import LinkContainerModel from './models/link-model';
export interface ISpfxGridWebPartProps {
    description: string;
    tilesPerLine: string;
    tileHeight: string;
    linkPropertiesArray: Array<LinkContainerModel>;
}
export default class SpfxGridWebPart extends BaseClientSideWebPart<ISpfxGridWebPartProps> {
    data: ISpfxGridWebPartProps;
    protected gridSize: {
        key: number;
        text: string;
        value: string;
    }[];
    protected linksArray: any[];
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    protected getTilesPerLineOptions(): {
        key: number;
        text: string;
        value: string;
    }[];
    protected addNewLink(context: any): void;
    protected getLinksPanePropertiesArray(): any[];
}
//# sourceMappingURL=SpfxGridWebPart.d.ts.map