import { languageContext } from "../../context/languageContext";
import {useContext} from 'react'
function Language() {
    const {contextLanguage, setContextLanguage} = useContext(languageContext)
    return ( 
        <>
        <h1 className="text-warning"> CONTEXT DATA: {contextLanguage}   </h1>
        <button className="btn btn-primary" onClick={() => setContextLanguage(contextLanguage==='en' ? 'ar' : 'en')}> CONTEXT CHANGE </button>

        </>
     );
}

export default Language;