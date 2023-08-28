import { IUser } from "../../../identity/domain/models/IUser";

export interface Comment{
  user: IUser,
  review: number,
  comment: string,
  spoiler: boolean
}
