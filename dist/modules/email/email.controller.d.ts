import { EmailService } from './email.service';
import { SendEmailDto } from './dtos';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendEmail(sendEmailDto: SendEmailDto): Promise<import("./interfaces").ISendEmailResponse>;
}
