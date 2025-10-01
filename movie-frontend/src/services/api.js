

const BASE_URL = "https://localhost:7205/api/movieproxy"

//const AUTH_URL = "https://localhost:7205/api/Auth"



//returns all popular movies
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/popular`);
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  const data = await response.json();
  return data; // or just `return data` if your backend returns the array directly
};

//returns searched movies
export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search?query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results || data;
};


//Register Users
export const RegisterUser = async (formData) =>{
  const response =  await fetch(`${BASE_URL}/register`, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Username: formData.username,
        Email: formData.email,
        Password: formData.password
        })
  });
  const result =  await response.json();
  return result;
}

//Login User
export const LoginUser = async (formData) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      identifier: formData.email,
      password: formData.password })

  });

  const result = await response.json();

  if (!response.ok) {
    
    return { code: response.status, message: errorData?.message || "Login failed" };

  }

  return {
    code: 200,
    token : result.token,
    email:formData.email || result.username
  };

};

//Add movies to favorites
export const addFavorite = async (MovieId, token) => {

  if(!token) 
  {
    return { code: 401, message: "No authorization token" };
  }
  console.log("Adding favorite tokeb ID:", token);
  const response = await fetch(`${BASE_URL}/favorites`, {

  method:"POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  },
  body: JSON.stringify({ MovieId })
  });
  const body = await response.text()
    .then(text => text ? JSON.parse(text) : null)
    .catch(() => null); 

  if (!response.ok) {
    return { code: response.status, message: body?.message || "Failed to add favorite" };
  }
  return { code: 200, data: body };
};

export const getFavoriteMovies = async (token) => {

  if(!token) 
  {
    return { code: 401, message: "No authorization token" };
  }

  const response = await fetch(`${BASE_URL}/userfavoritemovies`, {

  method:"GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
  });
  const body = await response.json().catch(() => null);

  if (!response.ok) {
    return { code: response.status, message: body?.message || "Failed to fetch favorites" };
  }

  return { code: 200, data: body };

};
