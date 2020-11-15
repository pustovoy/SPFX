import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField,
    PropertyPaneDropdown,
    PropertyPaneButton,
    PropertyPaneButtonType
  } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'SpfxGridWebPartStrings';

// Importing Vue.js
import Vue from 'vue';
// Importing Vue.js SFC
import SpfxGridComponent from './components/SpfxGrid.vue';

import { LinkPropertyPaneContainer } from './controls/LinkPropertyPaneContainer/LinkPropertyPaneContainer';

import LinkContainerModel from './models/link-model';

export interface ISpfxGridWebPartProps {
  description: string;
  tilesPerLine: string;
  tileHeight: string;
  linkPropertiesArray: Array<LinkContainerModel>;
}

export default class SpfxGridWebPart extends BaseClientSideWebPart<ISpfxGridWebPartProps> {

  public data: ISpfxGridWebPartProps;

  protected gridSize = [
    { key: 1, text: "One", value: 'grid-one' },
    { key: 2, text: "Two", value: 'grid-two' },
    { key: 3, text: "Three", value: 'grid-three' },
    { key: 4, text: "Four", value: 'grid-four' },
    { key: 5, text: "Five", value: 'grid-five' },
    { key: 6, text: "Six", value: 'grid-six' }
  ];

  protected linksArray = [];


  public render(): void {
    const id: string = `wp-${this.instanceId}`;
    this.domElement.innerHTML = `<div id="${id}"></div>`;

    this.data = {
      description: this.properties.description,
      tilesPerLine: this.properties.tilesPerLine,
      tileHeight: this.properties.tileHeight,
      linkPropertiesArray: this.properties.linkPropertiesArray
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
    this.getLinksPanePropertiesArray();
    return {
      pages: [
        {
          groups: [
            {
              groupName: strings.Style,
              groupFields: [
                PropertyPaneDropdown('tilesPerLine', {
                  label: strings.TilesPerLine,
                  options: this.getTilesPerLineOptions(),
                }),
                PropertyPaneTextField('tileHeight', {
                  label: strings.TileHeight
                })
              ]
            },
            {
              groupName: strings.Links,
              groupFields: [
                PropertyPaneButton('btnAdd', {
                  text: strings.AddNewLink,
                  buttonType: PropertyPaneButtonType.Hero,
                  icon: 'Add',
                  onClick: () => this.addNewLink(this),
                }),
                ...this.linksArray,
              ]
            },
          ]
        }
      ]
    };
  }

  protected getTilesPerLineOptions() {
    return this.gridSize;
  }

  protected addNewLink(context) {
    let linkProperties: LinkContainerModel = {
      key: context.linksArray.length,
      title: strings.LinkFieldTitle,
      value: '',
      color: 'cyan',
      link: '#'
    };

    context.properties.linkPropertiesArray.push(linkProperties);

    context.linksArray.push(
      LinkPropertyPaneContainer('value', {
        key: linkProperties.key.toString(),
        arrayOfLinks: 'linkPropertiesArray',
        label: strings.LinkFieldTitle,
        properties: context.properties,
        onPropertyChange: this.onPropertyPaneFieldChanged
      })
    );
  }

  protected getLinksPanePropertiesArray() {
    if (this.properties.linkPropertiesArray.length > 0 && this.linksArray.length === 0) {
      this.properties.linkPropertiesArray.forEach(link => {
        this.linksArray.push(
          LinkPropertyPaneContainer('value', {
            key: link.key.toString(),
            arrayOfLinks: 'linkPropertiesArray',
            label: strings.LinkFieldTitle,
            value: this.properties.linkPropertiesArray[link.key.toString()].value,
            properties: this.properties,
            onPropertyChange: this.onPropertyPaneFieldChanged
        }));
      });
    } else {
      return [];
    }

  }
}
