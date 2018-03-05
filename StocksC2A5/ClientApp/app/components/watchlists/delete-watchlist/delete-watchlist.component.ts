import { Component, OnInit, Input } from '@angular/core';
import { WatchlistDataService } from "../../shared/services/watchlist-data.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'delete-watchlist',
    templateUrl: './delete-watchlist.component.html',
    styleUrls: ['./delete-watchlist.component.css']
})
export class DeleteWatchlistComponent implements OnInit {
    public watchlistNameToDelete: string|null = null;

    @Input()
    public selectedWatchlistName: string | null = null;
    @Input()
    public selectedWatchlistId: string | null = null;

    public notification: string|null = null;

    constructor(private wService: WatchlistDataService,
            public location: Location,
            private route: ActivatedRoute,
            private router: Router){
    }

    public ngOnInit(): void {
        // default to the first available option
        this.selectedWatchlistName = this.route.snapshot.paramMap.get('wname');
        this.selectedWatchlistId = this.route.snapshot.paramMap.get('wid');
    }


    public OnDeleteWatchlist(watchlistName: string) {
        console.log("OnDeleteWatchlist - watchlistName")
        if (this.selectedWatchlistId)
            this.wService.deleteWatchlist(this.selectedWatchlistId)
                .subscribe(x => {
                                    if (x) {
                                        this.router.navigate(['watchlists']);
                                    }
                                    else {
                                        this.notification = "Failed"
                                    }
                                },
                error => { this.notification = error; }
                );
        
        
    }

    public OnCancel(watchlistName: string) {
        console.log("OnCancel - watchlistName")
        this.router.navigate(['watchlists', { wname: watchlistName }]);
    }

    
}


