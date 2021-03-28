import React from 'react'
import Banner from '../../components/Banner/Banner'
import requests from '../../request/Request'
import Row from '../../components/Row/Row'
import Navbar from '../../components/Navbar/Navbar'
import './Movies.css'

const Movies = () => {
    return (
        <div className="Movies">
            <Navbar />
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetFlixOriginals}
                isLargeRow={true}
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTreding} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default Movies
