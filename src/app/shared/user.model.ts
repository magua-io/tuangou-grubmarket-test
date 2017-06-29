export class User {
  constructor(
    public createdAt: number,
    public displayName: string,
    public id: string,
    public numFollowers: number = 0,
    public numFollowings: number = 0,
    public profileImage: string
  ) {
    this.createdAt = createdAt;
    this.displayName = displayName;
    this.id = id;
    this.numFollowers = numFollowers;
    this.numFollowings = numFollowings;
    this.profileImage = profileImage;
  }
}