import { IBike } from '../bikes/model/bike';
import { IClient } from '../clients/client.model';

export interface ISale {
    id?: number;
    date?: Date;
    clientId?: number;
    bikeId?: number;
    bike?: IBike;
    client?: IClient;
}