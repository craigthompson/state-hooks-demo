import { useState } from "react";

export default function MovieList() {
  //  Take the input value and add it to a "movie list" that gets displayed.
  const [movies, setMovies] = useState([
    "Star Wars",
    "Christmas Vacation",
    "Interstellar",
  ]);
  const [inputValue, setInputValue] = useState("");

  //  Create an array of HTML elments
  const movieList = movies.map((movie) => <h5 key={movie}>{movie}</h5>);

  //  Function to update "movies" to add the last known value of input
  const addMovie = () => {
    console.log(inputValue);
    setMovies([...movies, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h2>Movie List: </h2>
      {movieList}

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="button"
        style={{ marginLeft: "5px", backgroundColor: "lightskyblue" }}
        onClick={addMovie}
      >
        Add Movie
      </button>
    </div>
  );
}
