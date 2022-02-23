const INTIAL_VALUE ={ 
    movies:[]
};

export default (state= INTIAL_VALUE , action)=>{
        switch(action.type){
            case'Add-FAVORITE':
                    return{
                        ...state,
                        movies: action.payload
                    }
            default:
                return state
        }
}