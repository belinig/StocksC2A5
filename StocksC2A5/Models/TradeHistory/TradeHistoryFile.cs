using System;
using Microsoft.EntityFrameworkCore;
using ef=Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace StocksC2A5.Models.TradeHistory
{
    public class TradeHistoryFile : TradeHistoryImport
    {

        [Required]
        public string Filename { get; set; }

        public List<TradeHistoryItem> TradeHistoryItem { get; set; }

        public TradeHistoryImport ParentTradeHistoryImport { get; set; }

        public TradeHistoryFile()
        {
            Id = Guid.NewGuid();
        }
    }
}
