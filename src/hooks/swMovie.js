import React, { useState, useEffect } from "react";
import axios from "axios";

function SwMovies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://swapi.py4e.com/api/films/${number}/`
      );
      console.log(response);
      setMovie(response.data);
    }
    getData();
  }, [number]);

  return (
    <div>
      <h4>{movie.title}</h4>
      <h1>PICK A MOVIE</h1>
      <p>
        {movie.opening_crawl}
      </p>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
}
export default SwMovies;
