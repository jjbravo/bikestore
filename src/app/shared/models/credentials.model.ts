export interface ICredentials {
    username?: string;
    password?: string;
    roles?: string[];
    rememberMe?: boolean;
}

export class Credentials implements ICredentials {
    constructor(
        public username?: string,
        public password?: string,
        public roles?: string[],
        public rememberMe?: boolean
    ){}
}
