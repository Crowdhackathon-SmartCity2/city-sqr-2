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

  i = 0;

  async ngOnInit() {
    // if (sessionStorage.start) {
    //   this.start = sessionStorage.start;
    // }
    this.i = 0;

    console.log('HELLO');
    this.webService.getPublicWorks();
    // this.webService.getCarsCount();
    // this.getKeyDown();
  }

  showPercentage(c_funds, r_funds) {
    console.log('current funds: ' + (Number(c_funds[0]) + Number(c_funds[1])) + ' ' + 'required_funds: ' + r_funds);
    const elements = document.getElementsByClassName('progress-bar') as HTMLCollectionOf<HTMLElement>;
    const width = ((Number(c_funds[0]) + Number(c_funds[1])) / r_funds) * 100;
    if (elements[this.i] !== undefined) {
      elements[this.i].setAttribute('style', 'width: ' + width + '%');
    }
    console.log(elements[this.i]);
    this.i++;

    // $( ".progress-bar" ).each(function(index) {
    //   console.log( index + ": " + percentage[index] );
    //   $( this ).width(percentage[index] + "%");
    // });
  }

  // getPercentage(c_funds, r_funds) {
  //   return ((Number(c_funds[0]) + Number(c_funds[1])) / r_funds) * 100;
  // }
}
