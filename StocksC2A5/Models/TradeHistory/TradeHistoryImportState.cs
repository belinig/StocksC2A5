using System;
using Microsoft.EntityFrameworkCore;
using ef=Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace StocksC2A5.Models.TradeHistory
{
    public enum TradeHistoryImportState
    {
        Importing,
        Active,
        Inactive
    }
}
