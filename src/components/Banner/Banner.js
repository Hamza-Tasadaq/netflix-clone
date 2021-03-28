import React, { useState, useEffect } from 'react'
import requests from '../../request/Request'
import './Banner.css'
import axios from 'axios'


const Banner = () => {
    const [movie, setMovie] = useState([]);

    const turnCate = (string, n) => {
        return (
            string?.length > n ? string.substr(0, n) + '...' : string
        )
    }


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://api.themoviedb.org/3${requests.fetchNetFlixOriginals}`)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            return request;
        }
        fetchData();
    }, [])
    return (
        <>
            {
                movie &&
                <header className="Banner" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` }}>
                    <div className="bannerContent">
                        <h1 className="bannerTitle">{movie.title || movie.name || movie.orignal_name}</h1>
                        <div className="bannerButtons">
                            <button className="bannerButton">Play</button>
                            <button className="bannerButton">My List</button>
                        </div>
                        <h1 className="bannerDescription">
                            {turnCate(movie?.overview, 150)}
                        </h1>
                    </div>
                    <div className="bannerBottomFade" />
                </header>
            }
        </>
    )
}

export default Banner
