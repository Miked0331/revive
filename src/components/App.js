import React from 'react'
import { BrowserRouter, Route, } from 'react-router-dom'
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
            <BrowserRouter>
                <div>
                    <Landing />
                    <Nav />
                    <Route path='/' exact component={home} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/about' exact component={About} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App