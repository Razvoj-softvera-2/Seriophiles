using System.Text.Json;
using SeriesData.Models;

namespace SeriesData.Services;

public class SeriesDataService
{

    private readonly HttpClient _httpClient;

    public SeriesDataService(HttpClient httpClient)
    {
            _httpClient = httpClient;
    }

    public async Task<Show?> GetShowByName(string showName)
    {
        var response = await _httpClient.GetAsync($"https://api.tvmaze.com/search/shows?q={showName}");
        if (!response.IsSuccessStatusCode) return null;
        var content = await response.Content.ReadAsStringAsync();
        var shows = JsonSerializer.Deserialize<List<Show>>(content);
        return shows?.FirstOrDefault();
    }
   

}