import { Address } from './address';

export class Users{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;

    constructor()
    {
        this.address = new Address();
    }
}