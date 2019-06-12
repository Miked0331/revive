import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div className="nav">
            <div className="nav-items">
                <Link className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to='/' >
                    Home
                </Link>
                <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/menu">Menu
                </Link>
                <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/contact">Contact
                </Link>
            </div>
        </div>
    )
}

export default Nav