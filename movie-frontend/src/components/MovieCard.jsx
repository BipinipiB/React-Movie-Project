
//This is our movie card component
import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext'
import { AuthContext } from '../contexts/AuthContext';
import { addFavorite } from '../services/api';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function MovieCard({movie}){
   
    // this line gives access to all values like isFavorite,addToFavorites etc
    const {favorites,isFavorite, addToFavorites, removeFromFavorites} = useMovieContext(); 
    const favorite = isFavorite(movie.id);
    const { isLoggedIn, token } = useContext(AuthContext);
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();

    async function onFavoriteClicked(e) {
        e.preventDefault();
        if (!isLoggedIn) { 
            navigate("/login");  // ✅ works now
            return;
        }

        // optimistic UI update
        setSaving(true);
        const res = await addFavorite(movie.movieId, token);
        setSaving(false);

        if (res.code === 200) {
            console.log("Saved to favorites");
        } else {
            if (res.code === 401) {
                navigate("/login");
            }
            alert(res.message || "Could not save favorite");
        }
    }
    
    return <div className="movie-card"> 
        <div className="movie-poster">
        {console.log(movie.posterPath)}
            <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title}/>
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