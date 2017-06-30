import { DealItem } from './deal-item.model';
import { DealPickupLocation } from 'app/shared/deal-pickup-location.model';
import { User } from 'app/shared/user.model';

export class Deal {

  constructor(
    public allowPickup: boolean,
    public commentsCount: number,
    public createdAt: number,
    public dealItems: DealItem[],
    public dealPickupLocations: DealPickupLocation[],
    public description: string,
    public endTime: number,
    public id: string,
    public imagePaths: string[],
    public isPointsDeal: boolean,
    public isResourceDeal: boolean,
    public isWholesale: boolean,
    public language: string,
    public liked: boolean,
    public likesCount: number,
    public official: boolean,
    public orderCount: number,
    public owner: User,
    public paymentTime: number,
    public pickupTime: number,
    public promoted: boolean,
    public startTime: number,
    public status: string,
    public title: string,
    public viewCount: number
  ) {
    this.allowPickup = allowPickup;
    this.commentsCount = commentsCount;
    this.createdAt = createdAt;
    this.dealItems = dealItems;
    this.dealPickupLocations = dealPickupLocations;
    this.description = description;
    this.endTime = endTime;
    this.id = id;
    this.imagePaths = imagePaths;
    this.isPointsDeal = isPointsDeal;
    this.isResourceDeal = isResourceDeal;
    this.isWholesale = isWholesale;
    this.language = language;
    this.liked = liked;
    this.likesCount = likesCount;
    this.official = official;
    this.orderCount = orderCount;
    this.owner = owner;
    this.paymentTime = paymentTime;
    this.pickupTime = pickupTime;
    this.promoted = promoted;
    this.startTime = startTime;
    this.status = status;
    this.title = title;
    this.viewCount = viewCount;
  }

}