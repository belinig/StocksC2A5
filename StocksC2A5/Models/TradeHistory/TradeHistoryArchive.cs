using System;
using Microsoft.EntityFrameworkCore;
using ef=Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace StocksC2A5.Models.TradeHistory
{
    public class TradeHistoryArchive : TradeHistoryImport
    {

        [Required]
        public string ArchiveName { get; set; }

        public List<TradeHistoryFile> TradeHistoryFiles { get; set; }

        public TradeHistoryArchive()
        {
            Id = Guid.NewGuid();
        }
    }
}
