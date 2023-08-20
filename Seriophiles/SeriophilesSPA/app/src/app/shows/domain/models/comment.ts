import { IUser } from "../../../identity/domain/models/user";

export interface IComment{
  user: IUser,
  review: number,
  comment: string,
  spoiler: boolean,
  upvotes: number,
  downvotes: number
}
