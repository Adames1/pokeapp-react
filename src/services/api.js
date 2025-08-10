const urlBase = "https://pokeapi.co/api/v2/pokemon/";

export const getAllPokemons = async () => {
  const response = await fetch(urlBase);
  if (!response.ok) {
    throw new Error("Fetch API error");
  }
  const data = await response.json();

  const urls = data.results.map((pokeUrl) => pokeUrl.url);

  const promises = Promise.all(
    urls.map(async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    })
  );

  return promises;
};
