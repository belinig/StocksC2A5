import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { WatchlistsModule } from './components/watchlists/watchlists.module';
import { SocialLoginComponent } from './components/login/sociallogin/social-login.component';


const appRoutes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'Home/Index/:id', component: HomeComponent },
        { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent },
        {
            path: 'login', component: SocialLoginComponent
        },
        { path: 'api/Account/Login/:returnUrl', component: SocialLoginComponent },
        //,
        //{ path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }