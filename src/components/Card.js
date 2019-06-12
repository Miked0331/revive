import React from 'react'
import './App.css'


const Card = (props) => {
    return (

        <div>
            <div className="col-1">
                {props.children}
                <p>{props.desc}</p>
                <p>{props.price}</p>
            </div>
        </div>


    )
}

export default Card 