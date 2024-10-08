import { Model } from 'sequelize-typescript';
import { Order, Review } from '@modules';
export declare enum UserRoles {
    user = "USER",
    admin = "ADMIN"
}
export declare class User extends Model {
    id: number;
    name: string;
    phone: string;
    email: string;
    role: UserRoles;
    image?: string;
    orders: Order[];
    reviews: Review[];
}
