export type TRegister = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type TLogin = {
    email: string;
    password: string;
}

export type TProductPayload = {
    name: string;
    description: string;
    price: number;
}