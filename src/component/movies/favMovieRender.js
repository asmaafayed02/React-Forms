import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-regular-svg-icons'
import {faStar as faS}  from '@fortawesome/free-solid-svg-icons'
function FvMovieRender(props) {
    const {favMovies , filterMovies , handleMovie , className} = props
    return (  
        
        <div className={className}>
        {filterMovies.map(movie=>{
            return (
                <div className="card text-dark col m-4 ms-5 p-0" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Title:{movie.title}</h5>
                        <p className="card-text">popularity: {movie.popularity}</p>
                        <p className="card-text"> Favorite:
                        {favMovies.includes(movie.id)?(
                         <FontAwesomeIcon onClick={()=>{handleMovie(movie.id)}} icon={faS} /> ):
                         <FontAwesomeIcon icon={faStar} onClick={()=>{handleMovie(movie.id)}} />
                         }
                        </p>
                                                
                        <Link to={`/movieDetails/${movie.id}`} className="btn btn-primary">show details</Link>
                    </div>
                </div>
            )
        })}
        </div>

    );
}

export default FvMovieRender;