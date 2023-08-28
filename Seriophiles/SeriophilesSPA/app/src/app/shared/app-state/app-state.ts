import {Role} from "./role";

export interface IAppState{
  accessToken?: string;
  refreshToken? :string;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  userId?: number;
  roles? : string | string[];

  hasRole(role: Role): boolean;
  clone(): IAppState;
  isEmpty(): boolean;
  isAdmin(): boolean;
}

export class AppState implements IAppState{
  accessToken?: string;
  refreshToken? :string;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  userId?: number;
  roles?: string | string[];

  public constructor();
  public constructor(accessToken? : string, refreshToken?:string, userId? : number, username? : string, roles? : string | string[], email? : string, firstName? : string, lastName? : string);


  public constructor(...args : any[]) {
    if (args.length == 0) {
      return;
    }

    if(args.length == 7) {
      this.accessToken = args[0];
      this.refreshToken = args[1];
      this.userId = Number(args[2]);
      this.username = args[3];
      this.roles = args[4];
      this.email = args[5];
      this.firstName = args[6];
      this.lastName = args[7];
    }
  }

  hasRole(role: Role): boolean {
    if(!this.roles){
      return false;
    }
    if(typeof this.roles === "string"){
      return true;
    }
    return this.roles.find((roleInRoles : string) => roleInRoles === role) !== undefined;
  }

  clone(): IAppState {
    const newState = new AppState();
    Object.assign(newState, this);
    return newState;
  }

  isAdmin(): boolean {
    return this.hasRole(Role.ADMIN);
  }

  isEmpty(): boolean {
    const bool = this.accessToken === undefined && this.userId === undefined && this.username === undefined && this.roles === undefined && this.email === undefined && this.firstName === undefined && this.lastName === undefined && this.refreshToken === undefined;
    return bool;
  }


}
