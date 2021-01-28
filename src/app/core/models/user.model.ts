import {IUsers} from '../interfaces';

export class UserModel implements IUsers {
    first_name: string;
    middle_name: string;
    last_name: string;
    phone_number: string;
    address: {
        city: string,
        state: string,
    };
    email: string;
    password: string;
    password_confirmation: string;

    constructor(user?: Partial<IUsers>) {
        this.first_name = user && user.first_name || '';
        this.middle_name = user && user.middle_name || '';
        this.last_name = user && user.last_name || '';
        this.phone_number = user && user.phone_number || '';
        this.address = user && user.address ||  {
            city: '',
            state: '',
        };
        this.email = user && user.email  ||'',
        this.password = user && user.password||'';
        this.password_confirmation = user && user.password_confirmation || '';
    }
}