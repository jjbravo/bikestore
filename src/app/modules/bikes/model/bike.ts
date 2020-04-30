export interface IBike {
    id?: number;
    model: string;
    price: string;
    serial: string;
}

export class Bike implements IBike {
    id?: number;
    model: string;
    price: string;
    serial: string;
}
