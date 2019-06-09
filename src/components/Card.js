import React from 'react'
import './App.css'


const Card = (props) => {
    return (


        <div className="col-1">
            {props.children}
            <p>{props.desc}</p>
            <p>{props.price}</p>
        </div>


    )
}

export default Card 