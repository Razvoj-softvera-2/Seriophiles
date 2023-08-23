import {Role} from "./role";

export interface IAppState{
  accessToken?: string;
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
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  userId?: number;
  roles?: string | string[];

  public constructor();
  public constructor(accessToken? : string, userId? : number, username? : string, roles? : string | string[], email? : string, firstName? : string, lastName? : string);


  public constructor(...args : any[]) {
    if (args.length == 0) {
      return;
    }

    if(args.length == 7) {
      this.accessToken = args[0];
      this.userId = Number(args[1]);
      this.username = args[2];
      this.roles = args[3];
      this.email = args[4];
      this.firstName = args[5];
      this.lastName = args[6];
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
    return this.accessToken === undefined && this.userId === undefined && this.username === undefined && this.roles === undefined && this.email === undefined && this.firstName === undefined && this.lastName === undefined ;
  }


}
