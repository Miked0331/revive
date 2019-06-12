import React from 'react'
import { HashRouter, Route, } from 'react-router-dom'
import './App.css'
import CardList from './CardList'
import { Info } from './Info'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'
import Landing from './Landing'

const home = () => {
    return <CardList Info={Info} />
}


const App = () => {
    return (
        <div>
            <HashRouter basename='/revive'>
                <div>
                    <Landing />
                    <Nav />
                    <Route path='/' exact component={home} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/about' exact component={About} />
                </div>
            </HashRouter>
        </div>
    )
}

export default App