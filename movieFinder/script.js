// OMDb API URL and API Key
const apiKey = "56e3aae9"; // Replace with your OMDb API key
const apiURL = "https://www.omdbapi.com/";

// Function to fetch movies based on search query
const fetchMovies = async (searchQuery) => {
  const response = await fetch(
    `${apiURL}?s=${encodeURIComponent(searchQuery)}&apikey=${apiKey}`
  );
  const data = await response.json();
  if (data.Response === "True") {
    displayMovies(data.Search);
  } else {
    console.error("Error fetching movies:", data.Error);
  }
};

// Function to display movies as clickable links
const displayMovies = (movies) => {
  const movieContainer = document.getElementById("movieContainer");
  movieContainer.innerHTML = ""; // Clear previous results
  movies.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const movieLink = document.createElement("a");
    movieLink.href = `detail.html?id=${movie.imdbID}`; // Link to the detail page
    movieLink.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}" />
      <h3>${movie.Title}</h3>
    `;

    movieDiv.appendChild(movieLink);
    movieContainer.appendChild(movieDiv);
  });
};

// Event listener for search button
document.getElementById("searchBtn").addEventListener("click", () => {
  const searchQuery = document.getElementById("search").value;
  if (searchQuery) {
    fetchMovies(searchQuery);
  }
});
