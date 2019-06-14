import React from 'react'
import { HashRouter, Route, } from 'react-router-dom'
import './App.css'
import CardList from './CardList'
import { Info } from './Info'
import Contact from './Contact'
import Nav from './Nav'
import Landing from './Landing'
import Footer from './Footer'
import Home from './Home.js'

const menu = () => {
    return <CardList Info={Info} />
}

// <Route path='/' exact component={} />     <<home page component when it is built
const App = () => {
    return (
        <div>
            <HashRouter basename='/revive'>
                <div>
                    <Landing />
                    <Nav />
                    <Route path='/' exact component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/menu' component={menu} />

                    <Footer />
                </div>
            </HashRouter>
        </div>
    )
}

export default App