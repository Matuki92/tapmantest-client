// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { BeerCardComponent } from './components/beer-card/beer-card.component';

//pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

// services
import { VenueService } from './services/venue.service';
import { BeerService } from './services/beer.service';

// guards
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';

const routes: Routes = [
   { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuardService ] },
   { path: 'admin', component: AdminPageComponent, canActivate: [ RequireUserGuardService ] },
   { path: 'login', component: LoginPageComponent, canActivate: [ RequireAnonGuardService ] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminPageComponent,
    BeerCardComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    VenueService,
    BeerService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
