export interface Login {
    name: string;
    password: string;
}

export interface Register extends Login {
    name: string,
    email:string,
    password:string,
    rePassword:string,
    phone:string,
}

export interface ResetPassword {
    email: string,
    newPassword: string,
}