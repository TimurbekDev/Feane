import { Model } from 'sequelize-typescript';
import { User } from '@modules';
export declare class Review extends Model {
    id: number;
    content: string;
    user_id: number;
    user: User;
}
