import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { AppRoutingModule} from './app-routing.module'
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { WatchlistsModule } from './components/watchlists/watchlists.module';
import { SocialLoginComponent } from './components/login/sociallogin/social-login.component';
import { stocksAppReducer } from './components/shared/store/stocks-app-store';
import { WindowRef } from './components/shared/services/windowref.service';

import { UtilityService } from './components/shared/services/utility.service';
import { WatchlistDataService } from './components/shared/services/watchlist-data.service';
import { UserActions } from './components/shared/store/profile/user.actions';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrentDateTimeComponent } from './components/shared/directives/current-datetime.directive';
import { FindAlcStockDialog } from './components/watchlists/dialog-find-alc/dialog-find-alc.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        SocialLoginComponent,
        FindAlcStockDialog
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        WatchlistsModule,
        AppRoutingModule,
        StoreModule.forRoot(stocksAppReducer),
        StoreDevtoolsModule.instrument()
    ],
    entryComponents: [
        FindAlcStockDialog
    ],
    providers: [
        WindowRef,
        UserActions,
        UtilityService,
        WatchlistDataService,
        { provide: 'ORIGIN_URL', useValue: location.origin }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModuleShared {
}
