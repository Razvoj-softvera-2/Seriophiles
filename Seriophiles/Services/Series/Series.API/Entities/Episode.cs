namespace Series.API.Entities
{
    public class Episode
    {
        public int id { get; set; }
        public int? number { get; set; }
        public string? name { get; set; }
        public int? season { get; set; }
        public int? runtime { get; set; }
        public string? summary { get; set; }

    }
}
