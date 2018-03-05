using Microsoft.EntityFrameworkCore;
using StocksC2A5.Models.TradeHistory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StocksC2A5.Interfaces
{
    interface ITradeHistory
    {
        DbSet<TradeHistoryItem> TradeHistoryItems { get; set; }
        DbSet<TradeHistoryFile> TradeHistoryFiles { get; set; }
        DbSet<TradeHistoryArchive> TradeHistoryArchives { get; set; }
    }
}
