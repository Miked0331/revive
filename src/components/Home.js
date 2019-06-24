import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home" >
            <div className='home-item'>
                <p className="fs-normal b f3">Behind every successful person is a substantial amount of coffee.</p>
                <p className="f4 b">Please see our <Link className="yellow  hover-bg-dark-gray pa1" to="/menu">Menu
                </Link> for some deliciousness</p>
            </div>
            <div className='home-item'>
                <img src="https://images.unsplash.com/photo-1529417305485-480f579e7578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1409&q=80" alt="coffe shop"></img>
            </div>

        </div>
    )
}

export default Home