import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-custom-style',
  templateUrl: './nav-custom-style.component.html',
  styleUrls: ['./nav-custom-style.component.scss']
})

export class NgbdNavCustomStyle implements OnInit    {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }



  signOutUser() {
    firebase.auth().signOut();
  }

}




