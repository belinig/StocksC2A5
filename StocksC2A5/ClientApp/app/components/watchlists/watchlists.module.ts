import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSortModule } from '@angular/material';

import { MatTabsModule, MatDialogModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';


//watchlists components
import { WatchlistsComponent } from './watchlists.component';
import { ViewWatchlistComponent } from './view-watchlist/view-watchlist.component';
import { EditWatchlistComponent } from './edit-watchlist/edit-watchlist.component';
import { HistoricalViewWatchlistComponent } from './historical-view-watchlist/historical-view-watchlist.component';
import { DeleteWatchlistComponent } from './delete-watchlist/delete-watchlist.component';
import { NgbdTypeaheadAlc } from './typeahead-alc/typeahead-alc.component';
import { AlcNgbHighlight } from './highlight-alc/highlight-alc.component';


import { WatchlistsRoutingModule } from './watchlists-routing.module';

import { SymbolFilterPipe } from '../../components/shared/pipes/symbol-filter.pipe';
import { ProcessChainFilter } from '../../components/shared/pipes/process-chain-filter.pipe';

//import { stocksAppReducer } from './components/shared/store/stocks-app-store';
//import { SocialLoginComponent } from './components/login/sociallogin/social-login.component';



//import { TextFilterPipe } from './components/shared/pipes/text-filter.pipe';

//import { MathOperationPipe } from './components/shared/pipes/math-op.pipe';


@NgModule({
    declarations: [
        WatchlistsComponent,
        ViewWatchlistComponent,
        HistoricalViewWatchlistComponent,
        EditWatchlistComponent,
        DeleteWatchlistComponent,
        NgbdTypeaheadAlc,
        AlcNgbHighlight,
        SymbolFilterPipe,
        ProcessChainFilter
    ],
    imports: [
        FormsModule,
        RouterModule,
        StoreModule,
        RouterModule,
        StoreDevtoolsModule,
        NgbModule,
        MatSortModule,
        MatTabsModule,
        MatDialogModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        CommonModule,
        BrowserModule
    ],
    providers: [],
    exports: [
        WatchlistsComponent,
        DeleteWatchlistComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WatchlistsModule {
}

