import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';

import { ListUsersComponent } from './components/list-users/list-users.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { CreateStoryComponent } from './components/create-story/create-story.component';

import { AuthService } from './services/auth.service';
import { InitAuthGuardService } from './services/init-auth-guard.service'
import { RequireAnonGuardService } from './services/require-anon-guard.service';
import { RequireUserGuardService } from './services/require-user-guard.service';
import { UserService } from './services/user.service';
import { StoryService } from './services/story.service';
import { ListStoriesComponent } from './components/list-stories/list-stories.component';
import { SingleStoryComponent } from './components/single-story/single-story.component';


const routes: Routes = [
  { path: '',  component: LandingPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'auth/signup',  component: SignupPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'auth/login',  component: LoginPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'users',  component: UserListPageComponent, canActivate: [ RequireUserGuardService ] },
  { path: 'users/:id',  component: UserProfilePageComponent, canActivate: [ RequireUserGuardService ] },
  // { path: 'page',  component: ... , canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: '' }
 ];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignupPageComponent,
    LoginPageComponent,
    UserListPageComponent,
    ListUsersComponent,
    UserProfilePageComponent,
    ProfileUserComponent,
    CreateStoryComponent,
    ListStoriesComponent,
    SingleStoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService, 
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService,
    UserService,
    StoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
