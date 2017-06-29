import { DealItem } from './deal-item.model';
import { DealPickupLocation } from 'app/shared/deal-pickup-location.model';
import { User } from 'app/shared/user.model';

export class Deal {

  constructor(
    public dealItems: DealItem[],
    public dealPickupLocations: DealPickupLocation[],
    public description: string,
    public endTime: number,
    public id: string,
    public likesCount: number,
    public official: boolean,
    public orderCount: number,
    public owner: User,
    public pickupTime: number,
    public startTime: number,
    public status: string,
    public title: string,
    public viewCount: number
  ) {
    this.dealItems = dealItems;
    this.dealPickupLocations = dealPickupLocations;
    this.description = description;
    this.endTime = endTime;
    this.id = id;
    this.likesCount = likesCount;
    this.official = official;
    this.orderCount = orderCount;
    this.owner = owner;
    this.pickupTime = pickupTime;
    this.startTime = startTime;
    this.status = status;
    this.title = title;
    this.viewCount = viewCount;
  }

}