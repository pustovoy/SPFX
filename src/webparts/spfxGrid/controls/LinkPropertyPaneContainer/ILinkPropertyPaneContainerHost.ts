export interface ILinkPropertyPaneContainerHostProps {
  label: string;
  value?: string;
  onValueChanged: (value: string) => void;

  uniqueKey: string;
}
