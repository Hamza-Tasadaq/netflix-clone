// const APIKEY = "2e1d5eb728786617da6c5cf7cf3613c9";
const APIKEY = "2e1d5eb728786617da6c5cf7cf3613c9";


const requests = {
    fetchTreding: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetFlixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorroMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default requests;