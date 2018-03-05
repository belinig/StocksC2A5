using System;

namespace StocksC2A5.Data
{
    internal class WatchlistException : Exception
    {
        public WatchlistException()
        {
        }

        public WatchlistException(string message) : base(message)
        {
        }

        public WatchlistException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}