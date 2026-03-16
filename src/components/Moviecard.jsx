import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {
  return (
    <article>
      <Link to={`/${movie.Title}`}>
        <figure>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/noimage.png"}
            alt={movie.Title}
          />
          <figcaption>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </figcaption>
        </figure>
      </Link>
    </article>
  )
}