using System;
using System.ComponentModel;
using MongoDB.Bson;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace StocksC2A5.Models
{
    public class WatchlistQuote
    {
        public Watchlist Watchlist { get; set; }
        public ObservableCollection<Quote> Quotes { get; set; }
    }

}