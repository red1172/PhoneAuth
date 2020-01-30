import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }



}
