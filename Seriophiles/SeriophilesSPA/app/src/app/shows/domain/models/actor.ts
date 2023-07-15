import {ITvShow} from "./tvShow";

export interface IActor{
  name: string,
  surname: string,
  gender: string,
  tvShows: ITvShow[]
}
