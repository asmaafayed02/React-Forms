import axios from 'axios'
export const getMovies = () => (dispatch) => {
    //nameless functions
     // Return promise with success and failure 
     return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=13e099732f0301dc3297bf57094255cb").then(
     (res) => dispatch({ type: 'GET_MOVIES', payload : 
    res.data.results }),
     (err) => console.log(err)
     );
    };