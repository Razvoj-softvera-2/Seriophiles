namespace Series.API.Entities
{
    public class Season
    {
        public int id { get; set; }
        public string? premiereDate { get; set; }
        public string? endDate { get; set; }
        public int? episodeOrder { get; set; }
        public List<Episode>? episodes { get; set; }
    }
}
