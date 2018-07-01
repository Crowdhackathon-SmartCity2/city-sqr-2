import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicWorksComponent} from './publicWorks.component';
import {WebService} from './web.service';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MapComponent} from './map.component';
import {NavComponent} from './nav.component';
import {ContactComponent} from './contact.component';
import {AllProjectsComponent} from './allprojects.component';
import {ProfileComponent} from './profile.component';
import {ProjectPageComponent} from './projectpage.component';
import {WelcomePageComponent} from './welcomepage.component';
import { VolunteerComponent } from './volunteer.component';
import {FundComponent} from './fund.component';

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
    component: WelcomePageComponent
  },
  {
    path: 'home',
    component: PublicWorksComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  //DIMITRIS STUFF - IF THIS DOESNT WORK DELETE
  {
    path: 'allProjects',
    component: AllProjectsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'projectPage',
    component: ProjectPageComponent
  },
  {
    path: 'volunteer',
    component: VolunteerComponent
  },
  {
    path: 'fund',
    component: FundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, PublicWorksComponent,/*, HomeComponent, CarComponent, CallbackComponent, NavComponent*/
    MapComponent, NavComponent, ContactComponent, AllProjectsComponent, ProfileComponent, ProjectPageComponent, WelcomePageComponent, VolunteerComponent, FundComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule
  ],
  providers: [WebService/*, AuthService*/],
  bootstrap: [AppComponent]
})
export class AppModule {
}
