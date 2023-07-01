namespace Series.API.DTOs
{
    public class BaseTVShowDTO
    {
        public int id { get; set; }
        public string? name { get; set; }
        public int? year { get; set; }
        public int? runtime { get; set; }
        public string? premiered { get; set; }
        public string? ended { get; set; }
        public string? site { get; set; }
        public string? language { get; set; }
        public string[]? genres { get; set; }
        public string[]? episodes { get; set; }
        public string[]? cast { get; set; }
        public string? summary { get; set; }
    }
}
