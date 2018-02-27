import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '',  component: LandingPageComponent },
  { path: 'auth/signup',  component: SignupPageComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
