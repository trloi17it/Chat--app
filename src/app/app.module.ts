import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ChatComponent } from './chat/chat.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
// chat works
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, MatToolbarModule, MatButtonModule,
    MatInputModule, MatListModule, MatIconModule, FormsModule,
    AngularFireModule.initializeApp(
      environment.firebaseConfig
    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
