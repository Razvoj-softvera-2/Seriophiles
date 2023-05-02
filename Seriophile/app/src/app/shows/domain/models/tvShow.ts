import { Genre } from "./genres.enum";

export interface TvShow{
  id: number,
  name: string,
  genre: Genre,
  startDate: number,
  endDate?: number,
  rating?: number,
  numberOfReviews: number,
  description: string,
  comments: Comment[]
}
