import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    {path: '', redirectTo: '/signIn', pathMatch: 'full' },
    {path:'Home',component:LandingComponent},
    {path:'signUp',component:SignUpComponent},
    {path:'signIn',component:SignInComponent},
    {path:'**',component:PageNotFoundComponent}
];
