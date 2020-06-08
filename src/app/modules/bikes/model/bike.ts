export interface IBike {
    id?: number;
    model: string;
    price: string;
    serial: string;
    typeShockAbsorber: string;
    status: boolean;
}

export class Bike implements IBike {
    id?: number;
    model: string;
    price: string;
    serial: string;
    typeShockAbsorber: string;
    status: boolean;
}
