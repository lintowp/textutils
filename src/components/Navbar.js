import React from 'react'
// import './Navbar.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props){
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} align-items-center`}>
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button> 

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to='/'>Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/about'>About </Link>
            </li>
            <li className="nav-item">
            <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
            <label className="form-check-label" htmlfor="switchCheckDefault">{props.togglebtn}</label>
        </div>
        
        </div>
        </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    AboutText: PropTypes.string
  };

Navbar.defaultProps = {
    title: 'Set title here',
    AboutText: 'About test'
};

// export default Navbar

