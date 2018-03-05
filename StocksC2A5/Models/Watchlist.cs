using System;
using System.ComponentModel;
using MongoDB.Bson;
using System.Collections.Generic;
using Newtonsoft.Json;
using StocksC2A5.Helpers.Json;

namespace StocksC2A5.Models
{
    public class Watchlist
    {
        [JsonConverter(typeof(ObjectIdConverter))]
        public ObjectId Id { get; set; }
        [JsonIgnore]
        public ObjectId UserId { get; set; }
        public string Name { get; set; }
        public List<Stock> Symbols { get; set; }
        [JsonIgnore]
        [MongoDB.Bson.Serialization.Attributes.BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime? CreatedDate { get; set; }
        [JsonIgnore]
        [MongoDB.Bson.Serialization.Attributes.BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime? LastAccessDate { get; set; }
    }

}