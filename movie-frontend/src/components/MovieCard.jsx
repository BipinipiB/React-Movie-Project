
//This is our movie card component
import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext'


function MovieCard({movie}){
   
    // this line gives access to all values like isFavorite,addToFavorites etc
    const {favorites,isFavorite, addToFavorites, removeFromFavorites} = useMovieContext(); //useMovieContext is from MovieContext.jsx
    const favorite = isFavorite(movie.id);


    function onFavoriteClicked (e){
       e.preventDefault();
       if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }
    
    return <div className="movie-card"> 
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                {/* //if we are favorited add the active(red) class else non  */}
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick = {onFavoriteClicked}>
                    ❤︎
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3> {movie.title}</h3>
            {/* ...?.split[0] only displays year of release date instead of full date ee 2025-02-1 */}
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

// whenever we want to access something from another file in JS, we gonna export like below
//here moviecard is name of the component
export default MovieCard