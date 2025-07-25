
//This is our movie card component

function MovieCard({movie}){
  
    function onFavoriteClicked (){
        alert("Favorite Clicked")
    }
    
    return <div className="movie-card"> 
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick = {onFavoriteClicked}>
                    ❤︎
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3> {movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

// whenever we want to access something from another file in JS, we gonna export like below
//here moviecard is name of the component
export default MovieCard