import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container">
                  <Link className="navbar-brand" to="/">Real App</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/cards">Cards</NavLink>
                      </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/signin">signin</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="signup">signup</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
         );
    }
}
 
export default NavBar;