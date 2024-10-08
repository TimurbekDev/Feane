import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ISendEmailRequest, ISendEmailResponse } from './interfaces';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(payload: ISendEmailRequest): Promise<ISendEmailResponse> {
    await this.mailerService.sendMail({
      to: payload.to,
      from: '',
      subject: payload.title,
      text: payload.message,
    });

    return {
      message: `Email was  sent to ${payload.to} successfully`,
    };
  }
}
