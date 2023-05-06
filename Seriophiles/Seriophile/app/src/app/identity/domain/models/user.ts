import { TvShow } from "../../../shows/domain/models/tvShow";
import { Comment } from "../../../shows/domain/models/comment";
import { Genre } from "../../../shows/domain/models/genres.enum";

export interface User{
  id: number ;
  firstName: string;
  lastName: string;
  userName: string;
  favouriteGenres: Genre[];
  watchlist: TvShow[];
  reviews: Comment[];
}
