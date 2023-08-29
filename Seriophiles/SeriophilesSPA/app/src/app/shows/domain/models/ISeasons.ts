import {IEpisode} from "./IEpisode";


export interface ISeasons{
  id: number,
  premiereDate: string,
  endDate: string,
  episodeOrder: number,
  episodes: IEpisode[]
}
