export class Category {
  constructor(
    public code: string,
    public createdAt: number,
    public id: number,
    public name: string,
    public nameZh: string
  ) {
    this.code = code;
    this.createdAt = createdAt;
    this.id = id;
    this.name = name;
    this.nameZh = nameZh;
  }
}