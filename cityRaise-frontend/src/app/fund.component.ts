import {Component, OnInit} from '@angular/core';
import {WebService} from './web.service';


@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})

export class FundComponent {

  constructor(private webService: WebService/*, private authService: AuthService*/) {
  }

}