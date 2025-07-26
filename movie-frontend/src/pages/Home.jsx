// Displaying all list of movies here

import MovieCard from "../components/MovieCard"
// this is something referred as a hook
//hooks let you use different react features from your components like state,lifecycle methods, side effects etc
//when ever you see key word "use" like "userState" then its a hook
import { useState } from "react"  

function Home() {

    //destructuring concept in JS
    //const [definesstate,function that we can use to update the state]
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1984" },
        { id: 3, title: "Matrix", release_date: "1998" },
    ]

    const handleSearch = (e) => {
        //prevent default behaviour of a button
        console.log(searchQuery)
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("-----");
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
        <div className="movies-grid">
            {/* using .map function which is going to iterate over all of the values inside our array */}
            {/* every single value inside a movie object above will be passed into "<Moviecard>"" function */}
            {/* Key component is important when you are doing things in bulk so react knows which component to update yo yo */}
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
}

export default Home