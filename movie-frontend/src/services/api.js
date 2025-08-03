// const API_KEY = "7042d23e1ea632d0967991d3199ed38f";
// const BASE_URL ="https://api.themoviedb.org/3";

const BASE_URL = "https://localhost:7018/api/movieproxy"

const AUTH_URL = "https://localhost:7018/api/Auth"



//returns all popular movies
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/popular`);
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  const data = await response.json();
  return data.results; // or just `return data` if your backend returns the array directly
};

//returns searched movies
export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search?query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results || data;
};


//Register Users
export const RegisterUser = async (formData) =>{

  const response =  await fetch(`${AUTH_URL}/register`, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password
        })
  });
  const result =  await response.json();
  return result;
}
