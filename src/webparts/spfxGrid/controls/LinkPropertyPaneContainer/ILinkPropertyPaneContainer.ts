import { IPropertyPaneCustomFieldProps } from '@microsoft/sp-webpart-base';

export interface ILinkPropertyPaneContainerProps {
  key: string;
  label: string;
  properties: any;

  onPropertyChange(propertyPath: string, oldValue: any, newValue: any): void;

  value?: string;
  arrayOfLinks?: string;
}


export interface ILinkPropertyPaneContainerPropsInternal extends ILinkPropertyPaneContainerProps, IPropertyPaneCustomFieldProps {
}
