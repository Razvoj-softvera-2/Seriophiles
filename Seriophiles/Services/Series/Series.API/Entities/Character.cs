namespace Series.API.Entities
{
    public class Character
    {
        public int id { get; set; }
        public int? show_id { get; set; }
        public int? actor_id { get; set; }
        public string? name { get; set; }
        public string? actor_name { get; set; }
        public string? show_name { get; set; }
    }
}
