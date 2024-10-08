import { ISendEmailRequest } from '../interfaces';
export declare class SendEmailDto implements ISendEmailRequest {
    to: string;
    title: string;
    message: string;
}
