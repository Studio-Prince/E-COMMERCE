import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
function NavBar() {
  const state = useSelector((state)=>state)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white  shadow-sm" >
  <div className="container-fluid">
    <Link className="navbar-brand text-primary fw-bold fs-4" to="/"> OmniShopper</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="button">
        <Link to='/cart' className="btn btn-outline-primary">Cart{state.length}</Link>
      </div>
      
    </div>
  </div>
</nav>
    </div>
  );
}

export default NavBar;
