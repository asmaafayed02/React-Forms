const INTIAL_VALUE ={ 
    favMovies:[]
};

export default (state= INTIAL_VALUE , action)=>{
        switch(action.type){
            case'GET_MOVIES':
                    return{
                        ...state,
                        favMovies: action.payload
                    }
            default:
                return state
        }
}