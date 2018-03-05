using System;
using Microsoft.EntityFrameworkCore;
using ef=Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace StocksC2A5.Models.TradeHistory
{
    public class TradeHistoryImport
    {
        [Key]
        public virtual Guid Id { get; set; }
        public string SourceURI { get; set; }
        public DateTime? Start { get; set; }
        public DateTime? End { get; set; }

        public TradeHistoryImportState TradeHistoryImportState { set; get; }

        public TradeHistoryImport ()
        {
            Id = Guid.NewGuid();
        }

    }
}
