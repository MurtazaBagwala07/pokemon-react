import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
            
            <nav className="navbar">
                <div className="navbar-header">
                <h1>Pokemon App</h1>
                </div>
                <ul className="navbar-links">
                <Link className="navbar-link" to='/'>Home</Link>
                <Link className="navbar-link" to='/pokedex'>Pokedex</Link>
                <Link className="navbar-link" to='/fight'>Fight</Link>
                <Link className="navbar-link" to='/favourites'>Favourites</Link>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
