export class Account {
    constructor(
      public activated: boolean,
      public authorities: string[],
      public email: string,
     // public name: string,
      public firstName: string,
      public lastName: string,
      public login: string,
    ) {}
  }
