
export class User{
    first_name: string;
    middle_name: string;
    last_name:string;
    phone_number: string;
    address: {
        city:string,
        state:any
    }
    email:string;
    password:string;
    password_confirmation:string;
}