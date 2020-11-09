import React, { useState } from "react";
import { movies } from "../services/fakeMovieService";
const MoviesComponent = () => {
  const [allMovies, setAllMovies] = useState(movies);
  const deleteMovie = (movieId) => {
    const newMovies = allMovies.filter((m) => m._id !== movieId);
    setAllMovies(newMovies);
  };

  return (
    <div>
      {allMovies && allMovies.length <= 0 ? (
        <div>
          <h1>There are no movies in the database</h1>
        </div>
      ) : (
        <>
          <p> Showing {allMovies.length} movies in the database </p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {allMovies &&
                allMovies.length > 0 &&
                allMovies.map((movie, index) => {
                  return (
                    <tr key={index}>
                      <td> {movie.title} </td>
                      <td> {movie.genre.name} </td>
                      <td> {movie.numberInStock} </td>
                      <td> {movie.dailyRentalRate} </td>
                      <td>
                        <button
                          onClick={() => deleteMovie(movie._id)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>{" "}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default MoviesComponent;
