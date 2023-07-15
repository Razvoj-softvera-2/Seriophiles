import { IUser } from "../../../identity/domain/models/user";

export interface Comment{
  user: IUser,
  review: number,
  comment: string,
  spoiler: boolean,
  upvotes: number,
  downvotes: number
}
