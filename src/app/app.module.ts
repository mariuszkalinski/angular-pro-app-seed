import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';
// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
var config = {
  apiKey: "AIzaSyDyG6czeRQZ_4Cv9AmtkgnB6G4OEtjwW3k",
  authDomain: "fitness-app-fddfa.firebaseapp.com",
  databaseURL: "https://fitness-app-fddfa.firebaseio.com",
  projectId: "fitness-app-fddfa",
  storageBucket: "fitness-app-fddfa.appspot.com",
  messagingSenderId: "112267190921"
};
*/