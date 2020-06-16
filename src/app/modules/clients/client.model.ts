export interface IClient {
    id?: number;
    name: string;
    clientEmail: string;
    phoneNumber: string;
    documentNumber: String;
}

export class Client implements IClient {
    id?: number;
    name: string;
    clientEmail: string;
    phoneNumber: string;
    documentNumber: String;

}



export interface IClientWithSale {
    phoneNumber: string;
    serial: string;
    email: string;
    model: string;
    price: string;
    documentNumber: string;
    name: string;
}