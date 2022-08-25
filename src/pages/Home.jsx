import { useState, useEffect } from "react"
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard"

import "./moviesGrid.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [topMovies, setTopMovies] = useState([])

  const getPopularMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results)
  }

  useEffect(() =>{
    const popularUrl = `${moviesURL}popular?${apiKey}`;
    getPopularMovies(popularUrl);
  },[])

  return (
    <>
      <div className="container">
        <h2 className="title">Popular Movies</h2>
        <div className="movies-container">
          {topMovies.length === 0 && <Loading />}
          {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </>
  )
}