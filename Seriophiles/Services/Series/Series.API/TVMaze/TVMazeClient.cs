using Newtonsoft.Json.Linq;

namespace Series.API.TVMaze
{
	public class TVMazeClient
	{
		private static readonly string _url = "https://api.tvmaze.com";


		public static async Task<JObject> FetchTVShowJson(int id)
		{
			using (var client = new HttpClient())
			{
				var responseTask = client
					.GetAsync($"{_url}/shows/{id}")
					.ConfigureAwait(false);

				var response = await responseTask;
				if (!response.IsSuccessStatusCode)
				{
					return null;
				}

				var responseString = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
				var json = JObject.Parse(responseString);


				return prepareJObject(json);
			}
		}

		private static JObject prepareJObject(JObject data)
		{
			var json = new JObject();

			json.Add("id", data.Property("id").ToObject<int>());
			var name = string.Join(string.Empty, data.Property("name")) != "N/A" ? new JProperty("name", string.Join(string.Empty, data.Property("name"))) : new JProperty("name", null);
			json.Add(name);
			var runtime = data.Property("runtime").ToObject<string>() != "N/A" ? new JProperty("runtime", data.Property("runtime").ToObject<int>()) : new JProperty("runtime", null);
			json.Add(runtime);
			var genres = string.Join(string.Empty, data.Property("genres")) != "N/A" ? new JProperty("genres", string.Join(string.Empty, data.Property("genres")).Split(' ')) : new JProperty("genres", null);
			json.Add(genres);
			var premiered = string.Join(string.Empty, data.Property("premiered")) != "N/A" ? new JProperty("premiered", string.Join(string.Empty, data.Property("premiered"))) : new JProperty("premiered", null);
			json.Add(premiered);
			var ended = string.Join(string.Empty, data.Property("ended")) != "N/A" ? new JProperty("ended", string.Join(string.Empty, data.Property("ended"))) : new JProperty("ended", null);
			json.Add(ended);
			var site = string.Join(string.Empty, data.Property("officialSite")) != "N/A" ? new JProperty("site", string.Join(string.Empty, data.Property("officialSite"))) : new JProperty("site", null);
			json.Add(site);
			var language = string.Join(string.Empty, data.Property("language")) != "N/A" ? new JProperty("language", string.Join(string.Empty, data.Property("language"))) : new JProperty("language", null);
			json.Add(language);
			var summary = string.Join(string.Empty, data.Property("summary")) != "N/A" ? new JProperty("summary", string.Join(string.Empty, data.Property("summary"))) : new JProperty("summary", null);
			json.Add(summary);

			return json;
		}
	}
}
