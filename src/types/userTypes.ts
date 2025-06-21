export type IUser ={
    _id?: string;
    name: string;
    email: string;
    password?: string; // Optional for social logins
    createdAt?: Date;
    updatedAt?: Date;
}