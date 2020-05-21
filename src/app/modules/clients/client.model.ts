export interface IClient {
    id?: number;
    clientName: string;
    clientEmail: string;
    phoneNumber: string;
    documentNumber: String;
    documentType: String;
}

export class Client implements IClient {
    id?: number;
    clientName: string;
    clientEmail: string;
    phoneNumber: string;
    documentNumber: String;
    documentType: String;

}