import {useState, useEffect} from 'react'
import {useParams, } from 'react-router-dom'
import axios from 'axios'
function MovieDetails() {
    const params = useParams()
    const [movieDetails,setMovieDetails] = useState({})
    useEffect(() =>{
        
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=13e099732f0301dc3297bf57094255cb`)
        .then(res=>{setMovieDetails(res.data)})
        .catch(err=>{console.log(err)})
    },[])
    return (
         <>
            <h3>Movie Details</h3>
            <div className="card text-dark" >
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} className="card-img-top w-50 " alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> title: {movieDetails.title}</h5>
                <p className="card-text">overview: {movieDetails.overview}</p>
                <p className="card-text">Status: {movieDetails.status}</p>
                <p className="card-text">vote_average: {movieDetails.vote_average}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>
        </> 
    );
}

export default MovieDetails;