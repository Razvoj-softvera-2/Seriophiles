import {Role} from "./role";
import {IUser} from "../../identity/domain/models/user";

export interface IAppState{
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  userId?: number;
  accessToken?: string;
  refreshToken?: string;

  hasRole(role: Role): boolean;
  clone(): IAppState;
}

export class AppState implements IAppState{
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  userId?: number;
  role?: Role;
  accessToken?: string;
  refreshToken?: string;


  // @ts-ignore
  public constructor();
  // @ts-ignore
  public constructor(username: string, firstName: string, lastName: string, email: string, userId: number, role: Role, accessToken: string, refreshToken: string) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.userId = userId;
    this.role = role;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  // @ts-ignore
  public constructor(...args: any[]) {
    if (args.length === 0) {
      return;
    } else if (args.length === 8) {
      this.accessToken = args[0];
      this.refreshToken = args[1];
      this.username = args[2];
      this.email = args[3];
      this.role = args[4];
      this.firstName = args[5];
      this.lastName = args[6];
      this.userId = args[7];
    }
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

  isEmpt



}
