// this is a state manager for favorite movies
import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

//this provides state to any of the component that are wrapped around it
//we are going to wrap our entire app in this movie provider
export const MovieProvider = ({children}) => {
    const[favorites, setFavorites] = useState([]);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");

        //store all favs in a JSON string e.g "[1,2,3]"
        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    },[])

    useEffect(() =>{
        localStorage.setItem('favorites',JSON.stringify(favorites));
    },[favorites])




    //add favorites
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }
    //remove favorites

    const removeFromFavorites = (movieId) =>{
        setFavorites(prev=> prev.filter(movie => movie.id!==  movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        setFavorites, 
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    
    return <MovieContext.Provider value= {value}>
        {children}
    </MovieContext.Provider>
}