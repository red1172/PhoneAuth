import { Component, OnInit } from '@angular/core';
import * as admin from 'firebase-admin';




@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
// tslint:disable-next-line: prefer-const


export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    admin.auth().getUser(uid)
    .then(function(userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully fetched user data:', userRecord.toJSON());
    })
    .catch(function(error) {
      console.log('Error fetching user data:', error);
    });
  }

}
