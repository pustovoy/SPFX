import { PropertyPaneFieldType } from '@microsoft/sp-webpart-base';
import Vue from 'vue';
import LinkPropertyPaneComponent from './LinkPropertyPaneContainerHost.vue';
var LinkPropertyPaneContainerBuilder = /** @class */ (function () {
    function LinkPropertyPaneContainerBuilder(_targetProperty, _properties) {
        this.type = PropertyPaneFieldType.Custom;
        this.targetProperty = _targetProperty;
        this.properties = {
            key: _properties.key,
            arrayOfLinks: _properties.arrayOfLinks,
            label: _properties.label,
            onPropertyChange: _properties.onPropertyChange,
            value: _properties.value,
            onRender: this.onRender.bind(this),
            properties: _properties.properties
        };
        this.value = _properties.value;
        if (this.value === undefined) {
            this.value = '';
        }
    }
    LinkPropertyPaneContainerBuilder.prototype.render = function () {
        if (!this.elem) {
            return;
        }
        this.onRender(this.elem);
    };
    LinkPropertyPaneContainerBuilder.prototype.onRender = function (elem, ctx, changeCallback) {
        var _this = this;
        if (!this.elem) {
            this.elem = elem;
        }
        this.changeCB = changeCallback;
        var id = "ppf-" + this.properties.key;
        elem.innerHTML = '';
        // root div element of the control
        var element = document.createElement('div');
        element.id = id;
        elem.appendChild(element);
        var vueEl = new Vue({
            render: function (h) { return h(LinkPropertyPaneComponent, {
                props: {
                    uniqueKey: _this.properties.key,
                    value: _this.value,
                    label: _this.properties.label,
                    onValueChanged: _this._onInputChange.bind(_this)
                }
            }); }
        });
        vueEl.$mount(element);
    };
    LinkPropertyPaneContainerBuilder.prototype._onInputChange = function (newValue) {
        if (this.properties.onPropertyChange && newValue !== this.value) {
            this.properties.onPropertyChange(this.targetProperty, this.value, newValue);
            this.value = newValue;
            if (this.properties.arrayOfLinks) {
                this.properties.properties[this.properties.arrayOfLinks][this.properties.key][this.targetProperty] = newValue;
            }
            else {
                this.properties.properties[this.targetProperty] = newValue;
            }
            if (typeof this.changeCB !== 'undefined' && this.changeCB !== null) {
                this.changeCB(this.targetProperty, newValue);
            }
        }
    };
    return LinkPropertyPaneContainerBuilder;
}());
export function LinkPropertyPaneContainer(targetProperty, properties) {
    return new LinkPropertyPaneContainerBuilder(targetProperty, properties);
}
//# sourceMappingURL=LinkPropertyPaneContainer.js.map