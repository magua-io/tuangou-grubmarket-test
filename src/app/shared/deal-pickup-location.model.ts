export class DealPickupLocation {
  constructor(
    public description: string,
    public id: string,
    public isHidden: boolean,
    public organizerId: number,
    public shortId: number,
    public state: string
  ) {
    this.description = description;
    this.id = id;
    this.isHidden = isHidden;
    this.organizerId = organizerId;
    this.shortId = shortId;
    this.state = state;
  }
}