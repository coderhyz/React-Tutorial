import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MoviesContext";
// 父组件传来的movie
function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
  function handleFavorite(e) {
    e.preventDefault()
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id)
    } else {
      addToFavorites(movie)
    }
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        {/* 遮罩层 */}
        <div className="movie-overlay">
          <button onClick={handleFavorite} className={`favorite-btn ${isFavorite ? "active" : ""}`}>❤</button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
