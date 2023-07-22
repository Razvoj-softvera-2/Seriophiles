import { ITvShow } from "../../../shows/domain/models/tvShow";
import { Genre } from "../../../shows/domain/models/genres.enum";

export interface IUser{
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  favouriteGenres: Genre[];
  watchlist: ITvShow[];
  email: string;
  photo: string;
}
