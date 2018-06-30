import {Http, RequestOptions, RequestOptionsArgs, URLSearchParams} from '@angular/http';
// import '../../node_modules/rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';
import {Subject} from '../../node_modules/rxjs';
// import {PublicWorks} from './publicWorks.component';
import {$} from 'protractor';

@Injectable()
export class WebService {
  private publicWorks_private_list = [];
  private publicWorksSubject = new Subject();
  publicWorks_list = this.publicWorksSubject.asObservable();
  private coords_private_list = [];
  public coordsList = [[]];
  private coordsSubject = new Subject();
  coords_list = this.coordsSubject.asObservable();

  // private car_private_list = [];
  // private carSubject = new Subject();
  // car = this.carSubject.asObservable();


  // publicWorkID;

  constructor(private http: Http) {
  }

  getPublicWorks() {
    console.log('GETTING PUBLIC WORKS');
    return this.http.get('http://localhost:3000/api/publicWorks').subscribe(response => {
      this.publicWorks_private_list = response.json();
      this.publicWorksSubject.next(this.publicWorks_private_list);
      console.log("RESPONSE: " + response.json());
      console.log('LIST: ' + this.publicWorks_list);
      // console.log(this.searchResultsCount);
    });
  }

  getAllPublicWorkCoords() {
    console.log('GETTING PUBLIC WORKS COORDS');
    return this.http.get('http://localhost:3000/api/coords').subscribe(response => {
      this.coords_private_list = response.json();
      this.coordsSubject.next(this.coords_private_list);
      console.log("RESPONSE: " + response.json());
      console.log('LIST: ' + this.coords_list);
      this.coords_private_list.forEach(element => {
        this.coordsList.push([element[0], element[1]]);
      });
      // console.log(this.searchResultsCount);
    });
  }

  // getPublicWork(id) {
  //   return this.http.get('http://localhost:3000/api/cars/' + id).subscribe(response => {
  //     this.car_private_list = [];
  //     this.car_private_list.push(response.json());
  //     this.carSubject.next(this.car_private_list);
  //     this.carID = id;
  //   });
  // }
}
