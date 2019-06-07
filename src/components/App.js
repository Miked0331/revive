import React from 'react'
import Card from './Card'
import './App.css'
import p1 from './img/p1.jpg'


const App = () => {
    return (
        <div className="col-main tc ">
            <div className="col-1 ">
            <img src={p1} />
            </div>
            <div className="col-2 ">
            <img src={p1} />
            </div>
            <div className="col-3 ">
            <img src={p1} />
            </div>
         


            </div>
    )
}

export default App