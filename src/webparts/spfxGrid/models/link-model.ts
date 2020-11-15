export default class LinkContainerModel {
      key: Number;
      title: string;
      value: string;
      color: string;
      link: string;

  constructor (key: Number, title: string, value: string, color: string, link: string) {
    this.key = key;
    this.title = title || "Link Name";
    this.value = value;
    this.color = color || "blue";
    this.link = link || "#";
  }
}
