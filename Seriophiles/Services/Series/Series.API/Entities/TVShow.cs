using Series.API.DTOs;
namespace Series.API.Entities
{
    public class TVShow
    {
        public int id { get; set; }
        public string? name { get; set; }
        public string[]? genres { get; set; }
        public int? year { get; set; }
        public int? runtime { get; set; }
        public string? premiered { get; set; }
        public string? ended { get; set; }
        public string? site { get; set; }
        public string? language { get; set; }
        public List<SeasonDTO>? seasons { get; set; }
        public List<CharacterDTO>? cast { get; set; }
        public string? summary { get; set; }
        public string? image { get; set; }
    }
}
