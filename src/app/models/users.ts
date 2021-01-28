
export class User{
    first_name: string;
    middle_name: string;
    last_name:string;
    phone_number: number;
    address: {
        city:string,
        state:string
    }
    email:string;
    password:string;
    password_confirmation:string;
}