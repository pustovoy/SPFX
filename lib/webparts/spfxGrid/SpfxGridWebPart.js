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
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'SpfxGridWebPartStrings';
// Importing Vue.js
import Vue from 'vue';
// Importing Vue.js SFC
import SpfxGridComponent from './components/SpfxGrid.vue';
var SpfxGridWebPart = /** @class */ (function (_super) {
    __extends(SpfxGridWebPart, _super);
    function SpfxGridWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxGridWebPart.prototype.render = function () {
        var _this = this;
        var id = "wp-" + this.instanceId;
        this.domElement.innerHTML = "<div id=\"" + id + "\"></div>";
        this.data = {
            description: this.properties.description,
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
    };
    return SpfxGridWebPart;
}(BaseClientSideWebPart));
export default SpfxGridWebPart;
//# sourceMappingURL=SpfxGridWebPart.js.map