import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';
import * as firebase from 'firebase';
import { PhoneNumber } from '../phone-number';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})



export class ProfilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const user = firebase.auth().currentUser;
    if (user.uid) {
        this.router.navigate(['/accueil']);
    } else {
        //
      }
    }
  }

