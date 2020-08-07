export interface IUser {
    username?: string;
    password?: string;
    roles?: string[];
    rememberMe?: boolean;
}

export class User implements IUser {
    constructor(
        public username?: string,
        public password?: string,
        public roles?: string[],
        public rememberMe?: boolean
    ){}
}
