import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';
import * as firebase from 'firebase';
import { PhoneNumber } from '../phone-number';
import { Router } from '@angular/router';


@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.scss']
})
export class PhoneLoginComponent implements OnInit {

  windowRef: any;

  phoneNumber = new PhoneNumber();

  verificationCode: string;

  user: any;

  constructor(private win: WindowService,
              private router: Router) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    this.windowRef.recaptchaVerifier.render();
  }


  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;
                alert('Code envoyé');

            })
            .catch( error => console.log(error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;
                    this.router.navigate(['/profil']);

    })
    .catch( error => alert('Code inccorect'));
    // this.router.navigate(['/phone-login']);
  }


}
