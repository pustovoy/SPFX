import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
  } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'SpfxGridWebPartStrings';

// Importing Vue.js
import Vue from 'vue';
// Importing Vue.js SFC
import SpfxGridComponent from './components/SpfxGrid.vue';

export interface ISpfxGridWebPartProps {
  description: string;
}

export default class SpfxGridWebPart extends BaseClientSideWebPart<ISpfxGridWebPartProps> {

  public data: ISpfxGridWebPartProps;

  public render(): void {
    const id: string = `wp-${this.instanceId}`;
    this.domElement.innerHTML = `<div id="${id}"></div>`;

    this.data = {
      description: this.properties.description,
    };

    new Vue({
      el: `#${id}`,
      render: h => h(SpfxGridComponent, {
        props: this.data
      }),
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
