export interface IUsers {
    first_name: string,
    middle_name: string,
    last_name: string,
    phone_number: string,
    address: {
        city: string,
        state: string,
    },
    email: string,
    password: string,
    password_confirmation: string,
}                       