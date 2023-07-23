import { Genre } from "./genres.enum";
import {IEpisode} from "./episode";

interface IRating {
  average: number
}

export interface ITvShow{
  id: number,
  name: string,
  year: number,
  genres: Genre[],
  runtime: number,
  premiered: string,
  ended?: number,
  site?: string,
  language?: string,
  rating?: IRating,
  summary?: string,
  episodes: IEpisode[],
  cast: {[key: string]: string}
}
