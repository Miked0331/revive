import React from 'react'
import './App.css'


const Card = (props) => {
    return (

        <div className="col-1">
            <div className="">
                <img src="https://resizeimage.net/myimg/WPTwqEyLXgp779Up-pic-jpg" />
                <p>{props.desc}</p>
                <p>{props.price}</p>
            </div>

        </div>

    )
}

export default Card