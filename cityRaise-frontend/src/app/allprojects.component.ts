import {Component, OnInit} from '@angular/core';
import {WebService} from './web.service';
// import {AuthService} from './auth.service';
// import {$} from 'protractor';
// import {Validators} from '@angular/forms';
// import {createElement} from '@angular/core/src/view/element';
// import {Subject} from '../../node_modules/rxjs';

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.css']
})

export class AllProjectsComponent {

  constructor(private webService: WebService/*, private authService: AuthService*/) {
  }

}