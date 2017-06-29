import { Category } from 'app/shared/category.model';

export class DealItem {
  constructor(
    public available: number = 0,
    public category: Category,
    public createdAt: number,
    public description: string,
    public id: string,
    public imagePath: string,
    public maxAvailable: 5,
    public thumbnailPath: string,
    public unitPlural: string,
    public unitPrice: number
  ) {
    this.available = available;
    this.category = category;
    this.createdAt = createdAt;
    this.description = description;
    this.id = id;
    this.imagePath = imagePath;
    this.maxAvailable = maxAvailable;
    this.thumbnailPath = thumbnailPath;
    this.unitPlural = unitPlural;
    this.unitPrice = unitPrice;
  }
}