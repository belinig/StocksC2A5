using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StocksC2A5.Models.TradeHistory;
using System.Xml;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using StocksC2A5.Interfaces;
using StocksC2A5.Models;

namespace StocksC2A5.Data
{
    public class TradeHistoryDbContext : DbContext, ITradeHistory
    {
        public DbSet<TradeHistoryItem> TradeHistoryItems { get; set; }
        public DbSet<TradeHistoryFile> TradeHistoryFiles { get; set; }
        public DbSet<TradeHistoryArchive> TradeHistoryArchives { get; set; }


        public TradeHistoryDbContext(DbContextOptions<TradeHistoryDbContext> options) : base(options)
        { 
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
            modelBuilder.Entity<TradeHistoryItem>().HasKey(lc => new { lc.Symbol, lc.ExchangeAbbr, lc.Date });
            foreach (var property in modelBuilder.Model.GetEntityTypes()
                                        .SelectMany(t => t.GetProperties())
                                        .Where(p => p.ClrType == typeof(decimal))
                     )
            {
                property.Relational().ColumnType = "decimal(18, 4)";
            }

            //modelBuilder.Entity<TradeHistoryItem>().ToTable("TradeHistory");
        }


        public void FetchHistorical(ICollection<Quote> quotes, DateTime date)
        {
            Tuple<string, string, Quote>[] stocksPlusQuotes = quotes.Select(q =>
            {
                string[] ticker = q.Symbol.Split('.');
                return Tuple.Create<string, string, Quote>(ticker[0], ticker[1], q);
            }).ToArray();
            Tuple<string, string>[] stocks = stocksPlusQuotes.Select(s => Tuple.Create(s.Item1, s.Item2)).ToArray();


            List<TradeHistoryItem> items = this.TradeHistoryItems
                .Where(t => t.TradeHistoryImportState == TradeHistoryImportState.Active)
                .Where(t => t.Date == date)
                .Where(t => stocks.Contains(Tuple.Create<string, string>(t.Symbol, t.ExchangeAbbr)))
                .ToList();

            items.Select(i =>
            {
                Quote quote = stocksPlusQuotes.Where(q => q.Item1 == i.Symbol && q.Item2 == i.ExchangeAbbr).Select(s => s.Item3).FirstOrDefault();
                quote.Ask = i.Close;
                quote.LastTradeDate = i.Date;
                quote.StockExchange = i.ExchangeAbbr;
                quote.DailyHigh = i.High;
                quote.DailyLow = i.Low;
                quote.Open = i.Open;
                quote.Volume = i.Volume;
                return quote;
            }).ToArray();
        }


        //private static void ParseHistorical(ICollection<Quote> quotes, XDocument doc)
        //{
        //    //XElement results = doc.Root.Element("results");

        //    //foreach (Quote quote in quotes)
        //    //{
        //    //    //XElement q = results.Elements("quote").First(w => w.Element("Symbol").Value == quote.Symbol);
        //    //    XElement q = null;
        //    //    foreach (XElement xl in results.Elements("quote"))
        //    //    {
        //    //        if (xl.Element("Symbol").Value == quote.Symbol && xl.Element("Date") != null)
        //    //        {
        //    //            q = xl;
        //    //            break;
        //    //        }
        //    //    }

        //    //    if (q != null)
        //    //    {
        //    //        quote.LastTradeDate = GetDateTime(q.Element("Date").Value);
        //    //        quote.Open = GetDecimal(q.Element("Open").Value);
        //    //        quote.DailyLow = GetDecimal(q.Element("Low").Value);
        //    //        quote.DailyHigh = GetDecimal(q.Element("High").Value);
        //    //        quote.LastTradePrice = GetDecimal(q.Element("Close").Value);
        //    //        quote.Volume = GetDecimal(q.Element("Volume").Value);
        //    //        quote.AdjClose = GetDecimal(q.Element("Adj_Close").Value);
        //    //        quote.LastUpdate = DateTime.Now;
        //    //    }
        //    }
        //}
    }
}
