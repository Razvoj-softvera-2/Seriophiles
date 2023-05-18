import {Role} from "./role";
import {IUser} from "../../identity/domain/models/user";

export interface IAppState{
  user? : IUser;
  hasRole(role: Role): boolean;
  clone(): IAppState;
}

export class AppState implements IAppState{
  user?: IUser;
  role?: Role;

  constructor() {
  }



  hasRole(role: Role): boolean {
    if(!this.role){
      return false;
    }
    if(typeof this.role === "string"){
      return true;
    }
    return false;
  }

  clone(): IAppState {
    const newState = new AppState();
    Object.assign(newState, this);
    return newState;
  }



}
