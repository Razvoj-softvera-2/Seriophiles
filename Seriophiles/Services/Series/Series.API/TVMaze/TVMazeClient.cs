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

			var title = data.Property("name").ToObject<string>();
			if (title == "N/A")
			{
				json.Add("name", null);
			}
			else
			{
				json.Add("name", title);
			}

			json.Add("runtime", data.Property("runtime").ToObject<int>());


			return json;
		}
	}
}
