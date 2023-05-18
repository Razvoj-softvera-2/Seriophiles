import { TvShow } from "../../../shows/domain/models/tvShow";
import { Comment } from "../../../shows/domain/models/comment";
import { Genre } from "../../../shows/domain/models/genres.enum";

export interface IUser{
  id: number ;
  firstName: string;
  lastName: string;
  username: string;
  favouriteGenres: Genre[];
  watchlist: TvShow[];
  reviews: Comment[];
  email: string;
}
