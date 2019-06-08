import React from 'react'
import './App.css'
import { Info } from './Info'
import CardList from './CardList'


const App = () => {
    return (
        <div className="">
            <CardList Info={Info} />
        </div>
    )
}

export default App