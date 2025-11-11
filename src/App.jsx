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
        ></select>
      </div>
    </>
  )
}

export default App
