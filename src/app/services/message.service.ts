import { Injectable } from '@angular/core';
import { IMessageSender } from '../interfaces/message-sender';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) { }

  public createMessage(messageSender: IMessageSender): void {
    this.snackBar.open(messageSender.who, messageSender.message, {
      duration: messageSender.duration,
    });
  }

}
