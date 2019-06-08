import React from 'react'
import Card from './Card'

// using my own image
const CardList = ({ Info }) => {
    const cardComponent = Info.map((user, i) => {
        return <Card desc={Info[i].desc} price={Info[i].price}> <img src={Info[i].img} /></Card>
    })
    return (
        <div className="col-main">
            {cardComponent}
        </div>
    )
}

//using image in Card.js
/*const CardList = ({ Info }) => {
    const cardComponent = Info.map((user, i) => {
        return <Card desc={Info[i].desc} price={Info[i].price}></Card>
    })
    return (
        <div className="col-main">
            {cardComponent}
        </div>
    )
}*/

export default CardList
