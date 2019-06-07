import React from 'react'
import './App.css'
import p1 from './img/p1.jpg'

const Card = (props) => {
    return(
       
        <div className="col-1">
             <div className="">
            <img src={p1} />
            <p>{props.desc}</p>
            <p>{props.price}</p>
            </div>
            
        </div>
       
    )
}

export default Card