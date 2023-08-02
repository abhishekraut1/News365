import './css files/NavBar.css'
import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
const NavBar = ()=> {
  let [routeName, setRouteName] = useState("");
  
  const navigate = useNavigate();

  const ref = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    ref.current.value = "";

    routeName = routeName.toLowerCase();
    if(routeName === "home") routeName = "";
    
    if(routeName === "" || routeName === "business" || routeName === "entertainment" || routeName === "general" || routeName === "health"
    || routeName === "science" || routeName === "sports" || routeName === "technology"){
      navigate("/"+routeName);
    }else{
      navigate("/notfound");
    }
  }
  

    return (
      <div>
        <nav id='adding-css' className="navbar fixed-top navbar-expand-lg navbar-dark " >
  <div className="container-fluid">
  {/* style={{...{fontFamily: 'Anton , sans-serif'}, ...{fontFamily: 'Londrina Shadow , cursive'}}} */}
    <Link className="navbar-brand" to= "/" >NEWS365</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to= "/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to= "/business">Business</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link active" to= "/entertainment">Entertainment</Link>
          </li>
        {/* <li className="nav-item">
          <Link className="nav-link active" to= "/general">General</Link>
          </li> */}
        <li className="nav-item">
          <Link className="nav-link active" to= "/health">Health</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link active" to= "/science">Science</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link active" to= "/sports">Sports</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link active" to= "/technology">Technology</Link>
          </li>
      </ul>      
      <form className="d-flex" onSubmit={handleSubmit}>
        <input ref={ref} className="form-control me-2" type="search" onChange={(e) => {setRouteName(e.target.value)}} placeholder="Search" aria-label="Search" />
        <button id='search' className="btn" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
}

export default NavBar