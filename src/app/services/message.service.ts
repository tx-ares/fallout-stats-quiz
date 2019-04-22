import { Injectable } from '@angular/core';
import { IMessageSender } from '../interfaces/message-sender';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) { }

  public createMessage(messageSender: IMessageSender): void {
    const messageSenderWithColon = messageSender.who + ':';

    this.snackBar.open(messageSenderWithColon, messageSender.message, {
      duration: messageSender.duration,
    });
  }

}
