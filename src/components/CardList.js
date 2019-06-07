import React from 'react'
import Card from './Card'

const CardList = ({Info}) => {
    const cardComponent = Info.map((user, i) =>{
        return <Card img={Info[i].img} desc={Info[i].desc} price={Info[i].price} />
    })
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList
