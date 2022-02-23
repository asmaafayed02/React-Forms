import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./component/login/login";
import Register from "./component/register/register";
import Navbar from "./component/home/navbar";
import Home from "./component/home/home";
import NotFound from "./component/notFound/notFound";
import Movies from "./component/movies/movie";
import MovieDetails from "./component/movies/moviesDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FavoriteMovie from "./component/movies/favoriteMovie";
import { languageContext } from "./context/languageContext";
import {useState} from 'react'
import Language from "./component/langauge/language";
function App() {
  const [contextLanguage, setContextLanguage]= useState('en')
  return (
    <div className="App">
      {/* <Home/> */}
      <BrowserRouter>
        <languageContext.Provider value={{contextLanguage, setContextLanguage}}>
          <Navbar />
          <header className="App-header">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={LoginForm} />
              <Route path="/movie" exact component={Movies} />
              <Route path="/movieDetails/:id" exact component={MovieDetails} />
              <Route path="/favorite" exact component={FavoriteMovie} />
              <Route path="/language" exact component={Language} />
              <Route path={"*"} component={NotFound} />
              {/* <LoginForm/>
                          <Register/> */}
            </Switch>
          </header>
        </languageContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
