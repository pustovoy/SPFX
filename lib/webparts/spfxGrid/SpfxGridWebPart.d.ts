import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ISpfxGridWebPartProps {
    description: string;
}
export default class SpfxGridWebPart extends BaseClientSideWebPart<ISpfxGridWebPartProps> {
    data: ISpfxGridWebPartProps;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SpfxGridWebPart.d.ts.map