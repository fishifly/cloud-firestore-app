import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';


const firebaseConfig = {
  apiKey: 'AIzaSyCDr9wwWhG1B-hljIYmDftnIsK9keIi_FM',
    authDomain: 'firestore-app-e4db1.firebaseapp.com',
    databaseURL: 'https://firestore-app-e4db1.firebaseio.com',
    projectId: 'firestore-app-e4db1',
    storageBucket: 'firestore-app-e4db1.appspot.com',
    messagingSenderId: '828696021783'
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
