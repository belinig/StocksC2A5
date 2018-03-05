using System;
using Microsoft.EntityFrameworkCore;
using ef=Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace StocksC2A5.Models.TradeHistory
{
    public class TradeHistoryItem : Stock
    {
        public DateTime Date { get; set; }
        public decimal Open { get; set; }
        public decimal High { get; set; }
        public decimal Low { get; set; }
        public decimal Close { get; set; }
        public long Volume { get; set; }

        [ForeignKey("TradeHistoryImport")]
        public Guid ParentTradeHistoryImport_fk { get; set; }
        public TradeHistoryImport ParentTradeHistoryImport { get; set; }

        public TradeHistoryImportState TradeHistoryImportState { set; get; }
    }
}
