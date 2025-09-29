// Displaying all list of movies here


// this is something referred as a hook
//hooks let you use different react features from your components like state,lifecycle methods, side effects etc
//when ever you see key word "use" like "userState" then its a hook
import { useState,useEffect } from "react"  
import MovieCard from "../components/MovieCard"
import '../css/Home.css'
import { searchMovies,getPopularMovies } from "../services/api";

function Home() {

    //destructuring concept in JS
    //const [definesstate,function that we can use to update the state]
    const [searchQuery, setSearchQuery] = useState("");

    //storing movies in state so that
    //everytime we update the movieslist it will automatically re-render component
    const [movies,setMovies] = useState([]);
    const[error,setError] = useState(null);
    const[loading,setloading] = useState(true);

    // passing a dependency array by using ",[]" function
    // in this way we can check it everytime it renders and check if anything has changed...
    //since the last time we rendered and if yes the it will run following effect

    // and since we have "[]" empty that means we will simple run this once first time intially when this component is rendered
    //if you want to useeffect after any of the above state changes then you just add state inside [] below
    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                 //console.log("gettiing  movies response:")
                const popularMovies = await getPopularMovies ();
                //console.log("Popular movies response:", popularMovies);
                setMovies(popularMovies)
            }catch(err){ 
                setError("Failed to load movies...");
                //console.log(err);
            }
            //note its a good/common practise when you use and API call is to setup two sets of variabltes
            // one to store the "loading state" (loading data) 
            //one to store any potential error
            finally{
                setloading(false);
            }
        }
        //calling loadPopularmovies function here
        loadPopularMovies();
    },[])


    const handleSearch = async (e) => {
        //prevent default behaviour of a button so it does not update the page
        e.preventDefault();
        //if searchquery is empty then do nothing
        if(!searchQuery.trim()) return;

        //if already searching then return and not search anything else
        if(loading) return;

        setloading(true);

        try {
            const  searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);

        }catch(error) {
            console.log(error);
            setError("Failed to search movies...");
        }finally{
            setloading(false);
        }

        //change the state yourself like below
        setSearchQuery("");
    };
    
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text" 
                placeholder="Search for movies..." 
                className="search-input" 
                //connecting this component to searchQuery State
                value ={searchQuery}
                onChange= {(e) =>  setSearchQuery(e.target.value)}
             />
             <button type = "submit" className="search-button"> Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {/* //if we are loading then display loading other wise display movie */}
        {loading ? <div className="loading">Loading...</div> :
            <div className="movies-grid">
                {/* using .map function which is going to iterate over all of the values inside our array */}
                {/* every single value inside a movie object above will be passed into "<Moviecard>"" function */}
                {/* Key component is important when you are doing things in bulk so react knows which component to update yo yo */}
                {/* {movies.map((movie) => (
                    //render component <Moviecard> only if searchquery matches any movie in the list
                // movie.title.toLowerCase().startsWith(searchQuery) && 
                        <MovieCard movie={movie} key={movie.id} />
                ))} */}

                {movies && movies.length > 0 ? (
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                ))
                ) : ( <p>No movies found.</p>   )
                }

            </div>
        }
       
    </div>
}

export default Home