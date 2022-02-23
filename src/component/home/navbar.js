import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Register"}>Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/movie"}>movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/favorite"}>Favorite</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/language"}>Language</Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
      );
}

export default Navbar;