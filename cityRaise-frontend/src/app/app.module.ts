import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicWorksComponent} from './publicWorks.component';
import {WebService} from './web.service';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
// import { AuthService } from './auth.service';
// import { CallbackComponent } from './callback.component';
// import { NavComponent } from './nav.component';


// import { HomeComponent } from './home.component';
// import { CarComponent } from './car.component';


const routes: Routes = [
//   // {
//   //   path: '',
//   //   component: HomeComponent
//   // },
  {
    path: '',
    component: PublicWorksComponent
  }
//   // ,
//   // {
//   //   path: 'cars/:id',
//   //   component: CarComponent
//   // },
//   // {
//   //   path: 'callback',
//   //   component: CallbackComponent
//   // }
];

@NgModule({
  declarations: [
    AppComponent, PublicWorksComponent/*, HomeComponent, CarComponent, CallbackComponent, NavComponent*/
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule
  ],
  providers: [WebService/*, AuthService*/],
  bootstrap: [AppComponent]
})
export class AppModule {
}
