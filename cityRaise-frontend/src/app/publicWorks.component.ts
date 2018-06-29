import {Component, OnInit} from '@angular/core';
import {WebService} from './web.service';
// import {AuthService} from './auth.service';
// import {$} from 'protractor';
// import {Validators} from '@angular/forms';
// import {createElement} from '@angular/core/src/view/element';
// import {Subject} from '../../node_modules/rxjs';

@Component({
  selector: 'app-publicworks',
  templateUrl: './publicWorks.component.html',
  styleUrls: ['./publicWorks.component.css']
})

export class PublicWorksComponent implements OnInit {

  constructor(private webService: WebService/*, private authService: AuthService*/) {
  }

  async ngOnInit() {
    // if (sessionStorage.start) {
    //   this.start = sessionStorage.start;
    // }

    console.log('HELLO');
    this.webService.getPublicWorks();
    // this.webService.getCarsCount();
    // this.getKeyDown();
  }
}
