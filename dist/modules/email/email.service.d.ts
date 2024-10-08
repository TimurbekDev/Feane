import { MailerService } from '@nestjs-modules/mailer';
import { ISendEmailRequest, ISendEmailResponse } from './interfaces';
export declare class EmailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendEmail(payload: ISendEmailRequest): Promise<ISendEmailResponse>;
}
