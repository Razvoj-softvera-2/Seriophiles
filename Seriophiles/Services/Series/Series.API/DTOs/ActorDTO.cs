namespace Series.API.DTOs
{
    public class ActorDTO
    {
        public int id { get; set; }
        public string name { get; set; }
        public string? gender { get; set; }
        public string? birthday { get; set; }
        public string? deathday { get; set; }
        public List<CharacterDTO> characters { get; set; }
    }
}
