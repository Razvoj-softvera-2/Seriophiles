namespace Series.API.DTOs
{
    public class SeasonDTO
    {
        public int id { get; set; }
        public int number { get; set; }
        public string? premiereDate { get; set; }
        public string? endDate { get; set; }
        public int? episodeOrder { get; set; }

        public List<EpisodeDTO>? episodes { get; set; }
    }
}
