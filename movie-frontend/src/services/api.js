const API_KEY = "";
const BASE_URL ="";

export const getPopularMovies = async () => {
    //fetch is to send network request
    //returns all popular movies
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    //wait and grab json from result 
    const data = await response.json()
    return data.results
};

//(query) is a parameter which we are searching for
export const searchMovies = async (query) => {
    //fetch is to send network request
    //search for movie based on query
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
        )}`
    );
    //wait and grab json from result 
    const data = await response.json();
    return data.results;
};
