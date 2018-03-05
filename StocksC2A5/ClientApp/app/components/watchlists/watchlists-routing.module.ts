import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//watchlists components
import { WatchlistsComponent } from './watchlists.component';
import { DeleteWatchlistComponent } from './delete-watchlist/delete-watchlist.component';


const heroesRoutes: Routes = [
    {
        path: 'watchlists',
        component: WatchlistsComponent
    },
    {
        path: 'delete',
        component: DeleteWatchlistComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class WatchlistsRoutingModule { }