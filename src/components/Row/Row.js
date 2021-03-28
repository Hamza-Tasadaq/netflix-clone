import React, { useState, useEffect } from 'react'
import './Row.css'
import axios from 'axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import Iframe from '../Iframe/Iframe'

const Row = ({ title, fetchUrl, isLargeRow }) => {

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    const baseUrl = `https://api.themoviedb.org/3`

    const handleClick = (movie) => {
        const id = movie.id
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(null, { tmdbId: id })
                .then((url) => {
                    console.log("url-->", url)
                    if (url === null) {
                        alert("Trailer Dont Exist")
                    } else {
                        const res = url.slice(32)
                        setTrailerUrl(res);
                    }
                })
                .catch(() => {
                    console.log('Temporary Unavailable')
                })
        }
    }

    useEffect(() => {
        const fetchMovies = async () => {
            const request = axios.get(`${baseUrl}${fetchUrl}`)
            setMovies((await request).data.results)
            return request
        }
        fetchMovies()
    }, [fetchUrl])


    return (
        <div className={`Row ${isLargeRow && "firstRow"}`}>
            <h2>{title}</h2>
            <div className="rowPosters">
                {movies?.map((movie) => {
                    return (
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <img onClick={() => { handleClick(movie) }} className={`rowPoster ${isLargeRow && "rowPosterLarge"}`} key={movie.id} src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`} />
                        )
                    )
                })}
            </div>
            {trailerUrl && <Iframe url={`https://www.youtube.com/embed/${trailerUrl}`} />}
        </div >
    )
}

export default Row
