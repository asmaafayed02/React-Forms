import {useSelector , useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {addToFavorite} from '../../store/action/action'
import {getMovies} from '../../store/action/movieAction'
import FvMovieRender from './favMovieRender'
function FavoriteMovie() {
    const [movies, setMovie] = useState([])
    const favMovies = useSelector((state)=>{return state.favorite.favMovies})
    const filterMovies = movies.filter((m) => {
        return favMovies.includes(m.id);
      });
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
        <h2 className="h2 p-3">Favorite Movies</h2>
        <FvMovieRender className ='row g-4 container' filterMovies = {filterMovies} handleMovie = {handleMovie} favMovies={favMovies}/>
        </section>
     );
}

export default FavoriteMovie;