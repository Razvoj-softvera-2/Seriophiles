import { Genre } from "./genres.enum";
import { IComment } from "./comment";
import { ISeasonTvShow } from "./seasonTvShow";

export interface ITvShow{
  id: number,
  name: string,
  genre: Genre,
  startDate: number,
  endDate?: number,
  rating?: number,
  numberOfReviews: number,
  description?: string,
  comments: IComment [],
  poster: string,
  seasons: ISeasonTvShow[]
}
