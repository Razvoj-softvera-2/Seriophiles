import { User } from "../../../identity/domain/models/user";

export interface Comment{
  user: User,
  review: number,
  comment: string,
  spoiler: boolean
}
