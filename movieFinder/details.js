// Get movie ID from URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const movieID = urlParams.get("id");

// OMDb API key and URL
const apiKey = "56e3aae9"; // Replace with your OMDb API key
const apiURL = "https://www.omdbapi.com/";

// Function to fetch movie details
const fetchMovieDetails = async (movieID) => {
  const response = await fetch(`${apiURL}?i=${movieID}&apikey=${apiKey}`);
  const data = await response.json();
  return data;
};

// Function to display movie details
const displayMovieDetails = (movie) => {
  document.getElementById("moviePoster").src = movie.Poster;
  document.getElementById("movieTitle").textContent = movie.Title;
  document.getElementById("movieYear").textContent = `Year: ${movie.Year}`;
  document.getElementById("movieGenre").textContent = `Genre: ${movie.Genre}`;
  document.getElementById("moviePlot").textContent = `Plot: ${movie.Plot}`;
};

// Fetch and display movie details when the page loads
window.onload = async () => {
  const movie = await fetchMovieDetails(movieID);
  displayMovieDetails(movie);
};
