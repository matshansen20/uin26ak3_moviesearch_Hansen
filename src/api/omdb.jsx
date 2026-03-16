const API_KEY = "66c0a641"

export async function searchMovies(query) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
  const data = await res.json()
  return data.Search || []
}

export async function getMovie(title) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`)
  const data = await res.json()
  return data
}