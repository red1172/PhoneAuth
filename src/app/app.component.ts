import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAHtwXjuPgtu1Tnpg8x8Nbg1yFutejmM1w',
    authDomain: 'weighty-pixel-265720.firebaseapp.com',
    databaseURL: 'https://weighty-pixel-265720.firebaseio.com',
    projectId: 'weighty-pixel-265720',
    storageBucket: 'weighty-pixel-265720.appspot.com',
    messagingSenderId: '506387093961',
    appId: '1:506387093961:web:fad7c96779adce1e8f7018',
    measurementId: 'G-PNDZ4Z7JJ6'
    };
         // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}


