import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-log',
  templateUrl: './message-log.component.html',
  styleUrls: ['./message-log.component.scss']
})
export class MessageLogComponent implements OnInit {

  public logIsOpen = false;

  constructor() { }

  public toggleLogVisibility(): void {
    this.logIsOpen = !this.logIsOpen;
  }

  public ngOnInit(): void {

  }

}
