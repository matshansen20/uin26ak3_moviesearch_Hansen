import { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar"
import MovieList from "./components/MovieList"
import { searchMovies } from "../api/omdb"

export default function Home() {
  const [movies, setMovies] = useState([])

  async function handleSearch(query) {
    const results = await searchMovies(query)
    setMovies(results)
  }

  useEffect(() => {
    async function loadBond() {
      const results = await searchMovies("James Bond")
      setMovies(results.slice(0, 10))
    }

    loadBond()
  }, [])

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </>
  )
}