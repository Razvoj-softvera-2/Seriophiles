namespace Series.API.DTOs
{
    public class BaseSeriesDTO
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string[] Genres { get; set; }
        public int Year { get; set; }
        public string Runtime { get; set; }
        public string[] Streaming { get; set; }
        public string Description { get; set; }
        public int Seasons { get; set; }
        public int Episodes { get; set; }
        public string[] Cast { get; set; }
        public string Site { get; set; }
    }
}
