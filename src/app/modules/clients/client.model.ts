export interface IClient {
    id?: number;
    name: string;
    email: string;
    phoneNumber: string;
    document: String;
    documentType: String;
}

export class Client implements IClient {
    id?: number;
    name: string;
    email: string;
    phoneNumber: string;
    document: String;
    documentType: String;

}