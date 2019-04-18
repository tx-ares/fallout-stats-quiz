import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { IMessageSender } from '../interfaces/message-sender';

@Component({
  selector: 'app-vault-boy',
  templateUrl: './vault-boy.component.html',
  styleUrls: ['./vault-boy.component.scss']
})
export class VaultBoyComponent implements OnInit {

  public imageSrc = '../../assets/images/vaultboy1.png';

  constructor(private messageService: MessageService) { }

  public speak(): void {
    this.messageService.createMessage({who: 'vault-boy', importance: 'casual', message: 'Hi there, I\'m Vault Boy!', duration: 100000} as IMessageSender);
  }

  public ngOnInit(): void {
    this.speak(); // Only for testing, this will throw a non breaking error about a snack bar message being generated in a life cycle hook.
  }

}
