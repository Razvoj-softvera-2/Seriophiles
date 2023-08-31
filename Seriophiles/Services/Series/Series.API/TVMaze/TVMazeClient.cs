using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Series.API.Entities;
using Series.API.DTOs;
using Series.API.Repositories;


namespace Series.API.TVMaze
{
	public static class TVMazeClient
	{
		private static readonly string _url = "https://api.tvmaze.com";

		private static JObject show;
		private static JObject actor;
		

		public static async Task<JObject> FetchTVShowJson(int id)
		{
			using (var client = new HttpClient())
			{
				var responseShowTask = client
					.GetAsync($"{_url}/shows/{id}")
					.ConfigureAwait(false);

				var responseShow = await responseShowTask;
				if (!responseShow.IsSuccessStatusCode)
				{
					return null;
				}

				var responseString = await responseShow.Content.ReadAsStringAsync().ConfigureAwait(false);
				var json = JObject.Parse(responseString);


				var responseCastTask = client
					.GetAsync($"{_url}/shows/{id}/cast")
					.ConfigureAwait(false);

				var responseCast = await responseCastTask;
				if (!responseCast.IsSuccessStatusCode)
				{
					return null;
				}

				var responseCastString = await responseCast.Content.ReadAsStringAsync().ConfigureAwait(false);
				dynamic cast = JsonConvert.DeserializeObject(responseCastString);

				List<Character> castList = new List<Character>();
				foreach (var c in cast)
				{
					Character character = new Character();
					character.id = c.character.id.ToObject<int>();
					character.actor_id = c.person.id.ToObject<int>();
					character.show_id = id;
					character.name = c.character.name.ToObject<string>();
					character.actor_name = c.person.name.ToObject<string>();
					castList.Add(character);

				}

				show = prepareShow(json);
				var showCast = new JProperty("cast", JToken.FromObject(castList));
				show.Add(showCast);
			

				var responseSeasonsTask = client
					.GetAsync($"{_url}/shows/{id}/seasons")
					.ConfigureAwait(false);
				var responseSeasons = await responseSeasonsTask;

				if (responseSeasons.IsSuccessStatusCode)
				{
					var responseSeasonsString = await responseSeasons.Content.ReadAsStringAsync().ConfigureAwait(false);
					List<Season> listSeasons = JsonConvert.DeserializeObject<List<Season>>(responseSeasonsString);

					foreach (var season in listSeasons)
					{
						var responseEpisodesTask = client
							.GetAsync($"{_url}/seasons/{season.id}/episodes")
							.ConfigureAwait(false);
						var responseEpisodes = await responseEpisodesTask;
						if (responseEpisodes.IsSuccessStatusCode)
						{
							var responseEpisodesString = await responseEpisodes.Content.ReadAsStringAsync().ConfigureAwait(false);
							List<Episode> listEpisodes = JsonConvert.DeserializeObject<List<Episode>>(responseEpisodesString);
							season.episodes = listEpisodes;
						}
					}

					var seasons = new JProperty("seasons", JToken.FromObject(listSeasons));
					show.Add(seasons);
				}
			}

			return show;

		}



private static JObject prepareShow(JObject data)
		{
			
			
			var json = new JObject();

			json.Add("id", data.Property("id").ToObject<int>());
			var name = string.Join(string.Empty, data.Property("name")) != "N/A" ? new JProperty("name", string.Join(string.Empty, data.Property("name"))) : new JProperty("name", null);
			json.Add(name);

			var runtime = data.Property("runtime").ToObject<string>() != "N/A" ? new JProperty("runtime", data.Property("runtime").ToObject<string>()) : new JProperty("runtime", null);
			json.Add(runtime);

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
			
			var image = data.Property("image") != null && data.Property("image").Value.Type == JTokenType.Object
				? new JProperty("image", data.Property("image").Value["medium"].ToObject<string>())
				: new JProperty("image", null);
			json.Add(image);

			
			
			if (string.Join(string.Empty, data.Property("genres")) == "N/A")
            {
				json.Add(new JProperty("genres", null));
            }
            else
            {
				var splited_g = data.Property("genres").ToString().Split('\"');
				var list = new List<string>();
				foreach (var one_genre in splited_g)
				{
					string no_com = one_genre.Replace(",", "");
					string no_nl = no_com.Replace("\n", "");
					string no_brr = no_nl.Replace("[", "");
					string no_brl = no_brr.Replace("]", "");
					string no_q = no_brl.Replace("\"", "");
					if (no_q.Length > 0 && !no_q.Contains(' ') && no_q != "genres")
                    {
						list.Add(no_q);
                    }
				}
				json.Add(new JProperty("genres", list));
			}
			/*json.Add(new JProperty("genres", data.Property("genres").ToString()));*/

			return json;
		}

		public static async Task<Actor> FetchActorJson(int id)
		{
			using (var client = new HttpClient())
			{
				var responseActorTask = client
					.GetAsync($"{_url}/people/{id}")
					.ConfigureAwait(false);
				var responseActor= await responseActorTask;
				if (!responseActor.IsSuccessStatusCode)
				{
					return null;
				}

				var responseString = await responseActor.Content.ReadAsStringAsync().ConfigureAwait(false);
				Actor actor = JsonConvert.DeserializeObject<Actor>(responseString);
				
				var responseCharsTask = client
					.GetAsync($"{_url}/people/{id}/castcredits")
					.ConfigureAwait(false);


				var responseChar = await responseCharsTask;
				if (responseChar.IsSuccessStatusCode)
				{
					var responseCharString = await responseChar.Content.ReadAsStringAsync().ConfigureAwait(false);
					dynamic chars = JsonConvert.DeserializeObject(responseCharString);

					List<CharacterDTO> castList = new List<CharacterDTO>();

					foreach (var c in chars)
					{
						CharacterDTO character = new CharacterDTO();
						var char_id = c._links.character.href.ToString().Split("/");
						character.id = Int32.Parse(char_id[char_id.Length-1]);
						character.actor_id = id;
						var char_show_id = c._links.show.href.ToString().Split("/");
						character.show_id = Int32.Parse(char_show_id[char_show_id.Length-1]);
						character.actor_name = actor.name;

						var responseCharsNameTask = client
							.GetAsync($"{_url}/characters/{character.id}")
							.ConfigureAwait(false);


						var responseCharName = await responseCharsNameTask;
						if (responseCharName.IsSuccessStatusCode)
						{
							var responseCharNameString = await responseCharName.Content.ReadAsStringAsync().ConfigureAwait(false);
							dynamic chars_name = JsonConvert.DeserializeObject(responseCharNameString);
							var cn = chars_name.ToString().Split("\"");

							var index = Array.IndexOf(cn, "name");
							character.name = cn[index+2];
						}
						castList.Add(character);				
					}
					actor.characters = castList;
				}
				return actor;

			}
		}
	}
}
