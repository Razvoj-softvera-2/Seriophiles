import { User } from "../../../identity/domain/models/user";

export interface IComment{
  user: User,
  review: number,
  comment: string,
  spoiler: boolean,
  upvotes: number,
  downvotes: number
}
