import {ISeasons} from "./ISeasons";
import {ICast} from "./ICast";

export interface ITvShow{
  id: number,
  name: string,
  year: number,
  runtime: number,
  premiered: string,
  ended: string,
  site: string,
  language: string,
  genres: string[],
  seasons:ISeasons[],
  cast: ICast[],
  summary: string
}
