import axios from "axios";
import {getMovies} from '../../store/action/movieAction'
import { useEffect , useState} from "react";
import {useSelector , useDispatch} from 'react-redux'
import {addToFavorite} from '../../store/action/action'
import FvMovieRender from './favMovieRender'
function Movies() {
    const [movies, setMovie] = useState([])
    const favMovies = useSelector((state)=>{return state.favorite.favMovies})
    const dispatch = useDispatch()
    // useEffect(() => {
    //     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=13e099732f0301dc3297bf57094255cb')
    // .then(res=> {setMovie(res.data.results); console.log(res.data.results);})
    // .catch(err=> console.log(err))
    // },[])
    useEffect(() => {
        // axiosInstance 
        dispatch(getMovies())
    }, [])
    const handleMovie=(id)=>{
        if(favMovies.includes(id)){
            const index = favMovies.indexOf(id);
            console.log(index);
            favMovies.splice(index,1)
            dispatch(
                addToFavorite([...favMovies])
            ) 
        }else{
            dispatch(addToFavorite([id,...favMovies]))
        }
    }
   
    return ( 
        <section>
        <h2 className="h2 p-3">Movies</h2>
        <FvMovieRender className='row row-cols-4 g-4 container' filterMovies = {favMovies} handleMovie = {handleMovie} favMovies={favMovies}/>

        </section>
     );
}

export default Movies;