import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMovie } from "../api/omdb"

export default function Movie() {
  const { movie } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchMovie() {
      const result = await getMovie(movie)
      setData(result)
    }

    fetchMovie()
  }, [movie])

  if (!data) return <p>Loading...</p>

  return (
    <article>
      <h1>{data.Title}</h1>
      <p>{data.Year}</p>
      <p>{data.Plot}</p>
      <img src={data.Poster} alt={data.Title} />
    </article>
  )
}