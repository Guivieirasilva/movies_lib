import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {BiCameraHome} from "react-icons/bi"
import {FaFontAwesomeFlag} from "react-icons/fa"
import {
  BsGraphUp, 
  BsWallet2, 
  BsHourglassSplit, 
  BsCameraVideo,
  BsFillFileEarmarkTextFill
} from "react-icons/bs"

import MovieCard from "../components/MovieCard"

import "./Movie.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Movie () {

  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async(url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL)

  },[])
  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>

          <div className="info">
            <h3>
              <BsCameraVideo /> Genre:
            </h3>
            <p>{movie.genres.map(item => `${item.name}. ` )}</p>
          </div>

          <div className="info ">
            <h3>
              <BsFillFileEarmarkTextFill /> synopsis:
            </h3>
            <p>{movie.overview}</p>
          </div>

          <div className="info">
            <h3>
              <BsHourglassSplit /> Duration:
            </h3>
            <p>{movie.runtime} minutes</p>
          </div>

          <div className="info">
            <h3>
              <BsWallet2 /> budget:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>

          <div className="info">
            <h3>
              <BsGraphUp /> Revenue:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          
          <div className="info">
            <h3>
              <FaFontAwesomeFlag /> production country:
            </h3>
            <p>{movie.production_countries.map(item => `${item.name}. ` )}</p>
          </div>

          <div className="info production">
            <h3>
              <BiCameraHome /> production companies:
            </h3>
            <p>{movie.production_companies.map(item => `${item.name}. ` )}</p>
          </div>
        </>
      )}
    </div>
  );
}

