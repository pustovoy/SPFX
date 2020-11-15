declare interface ISpfxGridWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  TilesPerLine: string;
  TileHeight: string;
  Style: string;
  Links: string;
  AddNewLink: string;
  LinkFieldTitle: string;
}

declare module 'SpfxGridWebPartStrings' {
  const strings: ISpfxGridWebPartStrings;
  export = strings;
}
