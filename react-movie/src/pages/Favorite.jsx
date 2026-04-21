import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MoviesContext";
import MovieCard from "../components/MovieCard";
function Favorite() {
    const { favorites } = useMovieContext()
    return (
        <div className={favorites?.length > 0 ? "favorites" : "favorites-empty"}>
            {favorites?.length > 0 ? (
                <>
                    <h2>Your Favorites</h2>
                    <div className="movies-grid">
                        {favorites.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h2>没有喜欢的电影</h2>
                    <p>Start adding movies to your favorites and they will appear here!</p>
                </>
            )}
        </div>
    );
}

export default Favorite;