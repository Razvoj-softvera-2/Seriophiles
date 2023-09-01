import {IEpisode} from "./IEpisode";


export interface ISeasons {
  id: number,
  number: number,
  premiereDate: string,
  endDate: string,
  episodeOrder: number,
  episodes: IEpisode[]
}
