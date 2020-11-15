var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField, PropertyPaneDropdown, PropertyPaneButton, PropertyPaneButtonType } from '@microsoft/sp-webpart-base';
import * as strings from 'SpfxGridWebPartStrings';
// Importing Vue.js
import Vue from 'vue';
// Importing Vue.js SFC
import SpfxGridComponent from './components/SpfxGrid.vue';
import { LinkPropertyPaneContainer } from './controls/LinkPropertyPaneContainer/LinkPropertyPaneContainer';
var SpfxGridWebPart = /** @class */ (function (_super) {
    __extends(SpfxGridWebPart, _super);
    function SpfxGridWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gridSize = [
            { key: 1, text: "One", value: 'grid-one' },
            { key: 2, text: "Two", value: 'grid-two' },
            { key: 3, text: "Three", value: 'grid-three' },
            { key: 4, text: "Four", value: 'grid-four' },
            { key: 5, text: "Five", value: 'grid-five' },
            { key: 6, text: "Six", value: 'grid-six' }
        ];
        _this.linksArray = [];
        return _this;
    }
    SpfxGridWebPart.prototype.render = function () {
        var _this = this;
        var id = "wp-" + this.instanceId;
        this.domElement.innerHTML = "<div id=\"" + id + "\"></div>";
        this.data = {
            description: this.properties.description,
            tilesPerLine: this.properties.tilesPerLine,
            tileHeight: this.properties.tileHeight,
            linkPropertiesArray: this.properties.linkPropertiesArray
        };
        new Vue({
            el: "#" + id,
            render: function (h) { return h(SpfxGridComponent, {
                props: _this.data
            }); },
        });
    };
    Object.defineProperty(SpfxGridWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SpfxGridWebPart.prototype.getPropertyPaneConfiguration = function () {
        var _this = this;
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
                                    onClick: function () { return _this.addNewLink(_this); },
                                })
                            ].concat(this.linksArray)
                        },
                    ]
                }
            ]
        };
    };
    SpfxGridWebPart.prototype.getTilesPerLineOptions = function () {
        return this.gridSize;
    };
    SpfxGridWebPart.prototype.addNewLink = function (context) {
        var linkProperties = {
            key: context.linksArray.length,
            title: strings.LinkFieldTitle,
            value: '',
            color: 'cyan',
            link: '#'
        };
        context.properties.linkPropertiesArray.push(linkProperties);
        context.linksArray.push(LinkPropertyPaneContainer('value', {
            key: linkProperties.key.toString(),
            arrayOfLinks: 'linkPropertiesArray',
            label: strings.LinkFieldTitle,
            properties: context.properties,
            onPropertyChange: this.onPropertyPaneFieldChanged
        }));
    };
    SpfxGridWebPart.prototype.getLinksPanePropertiesArray = function () {
        var _this = this;
        if (this.properties.linkPropertiesArray.length > 0 && this.linksArray.length === 0) {
            this.properties.linkPropertiesArray.forEach(function (link) {
                _this.linksArray.push(LinkPropertyPaneContainer('value', {
                    key: link.key.toString(),
                    arrayOfLinks: 'linkPropertiesArray',
                    label: strings.LinkFieldTitle,
                    value: _this.properties.linkPropertiesArray[link.key.toString()].value,
                    properties: _this.properties,
                    onPropertyChange: _this.onPropertyPaneFieldChanged
                }));
            });
        }
        else {
            return [];
        }
    };
    return SpfxGridWebPart;
}(BaseClientSideWebPart));
export default SpfxGridWebPart;
//# sourceMappingURL=SpfxGridWebPart.js.map