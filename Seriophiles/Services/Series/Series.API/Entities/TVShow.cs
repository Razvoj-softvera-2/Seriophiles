namespace Series.API.Entities
{
    public class TVShow
    {
        public int id { get; set; }
        public string? name { get; set; }
        public string[]? genres { get; set; }
        public int? year { get; set; }
        public int? runtime { get; set; }
    }
}
