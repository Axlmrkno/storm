import React from 'react'
import './ItemListContainer.css'
//uso del props
const ItemListContainer = ({saludos, mensaje}) => {
    return (
        <div className="welcome">
            <h1>{saludos}</h1>
            <h2>{mensaje}</h2>
        </div>
    )
}

export default ItemListContainer
