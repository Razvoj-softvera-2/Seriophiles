import { ICharacter } from "./ICharacters";

export interface IActor{
  id: number,
  name: string,
  gender: string,
  birthday: string,
  deathday: string,
  characters: ICharacter[]
}
