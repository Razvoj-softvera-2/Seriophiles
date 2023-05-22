import { IEpisode } from "./episode";

export interface ISeasonTvShow{
  id: number;
  season: number;
  year:number;
  episodes?: IEpisode[];
}
