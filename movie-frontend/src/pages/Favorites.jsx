//Displaying all favorites here
import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'


function Favorites(){
      
   const {favorites} = useMovieContext();

   if(favorites){
      return ( 
               <div className="favorites">
                  <h2> Your Favorites</h2>
                     <div className="movies-grid">
                        {/* using .map function which is going to iterate over all of the values inside our array */}
                        {/* every single value inside a movie object above will be passed into "<Moviecard>"" function */}
                        {/* Key component is important when you are doing things in bulk so react knows which component to update yo yo */}
                        {favorites.map((movie) => (
                           //render component <Moviecard> only if searchquery matches any movie in the list
                        // movie.title.toLowerCase().startsWith(searchQuery) && 
                                 <MovieCard movie={movie} key={movie.id} />
                        ))}
                      </div>
               </div>
           ); 
   }

     return <div className="favorites-empty">
        <h2>No  Favorites movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
     </div>
}



export default Favorites