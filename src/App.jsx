import { useEffect, useState } from "react";

const moviesData = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];
function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredMovies(moviesData);
    } else {
      const filtered = moviesData.filter(
        (movie) => movie.genre === selectedGenre
      );
      setFilteredMovies(filtered);
    }
  }, [selectedGenre]);

  const genres = ["", ...new Set(moviesData.map((movie) => movie.genre))];
  return (
    <>
      <div className="app-container">

        <h1 className="title">Lista Film</h1>

        <div className="filter-container">
          <label htmlFor="genre-select">Filtra per genere:</label>
        </div>
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre === "" ? "Tutti" : genre}
            </option>
          ))}
        </select>

        <ul className="movie-list">
          {filteredMovies.map((movie, index) => (
            <li key={index} className="movie-item">
              <span className="movie-title">{movie.title}</span>
              <span className="movie-genre">{movie.genre}</span>
            </li>
          ))}
        </ul>
      </div>



    </>
  )
}

export default App
