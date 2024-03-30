import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { LandingComponent } from './front-office/landing/landing.component';
import { NftStoreComponent } from './front-office/nft-store/nft-store.component';
import { AboutComponent } from './front-office/about/about.component';
import { BlogSectionComponent } from './front-office/landing/blog-section/blog-section.component';
import { BlogComponent } from './front-office/blog/blog.component';

export const routes: Routes = [
    {path: '', redirectTo: '/signIn', pathMatch: 'full' },
    {path:'Home',component:LandingComponent},
    {path:'signUp',component:SignUpComponent},
    {path:'signIn',component:SignInComponent},
    {path:'Shop',component:NftStoreComponent},
    {path:'About',component:AboutComponent},
    {path:'Blog',component:BlogComponent},
    {path:'**',component:PageNotFoundComponent}
];
