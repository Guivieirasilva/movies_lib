import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

import "./moviesGrid.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [topMovies, setTopMovies] = useState([])

  const getPopularMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() =>{
    const popularUrl = `${moviesURL}popular?${apiKey}`

    getPopularMovies(popularUrl)
  },[])

  return (
    <div className="container">
      <h2 className="title">Filmes Populares</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

 export default Home