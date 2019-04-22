import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaultBoyComponent } from './vault-boy/vault-boy.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { MessageService } from './services/message.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessageLogComponent } from './message-log/message-log.component';

@NgModule({
  declarations: [
    AppComponent,
    VaultBoyComponent,
    MessageLogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule,
    MatSnackBarModule
  ],
  providers: [MessageService, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
