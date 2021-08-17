import React from 'react'
import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount'
//uso del props
const handleCount=(cant)=>{
  alert(cant)  
}
const ItemListContainer = ({saludos, mensaje}) => {
    return (
        <>
        <div className="welcome">
            <h1>{saludos}</h1>
            <h2>{mensaje}</h2>
        </div>
       <ItemCount stock={5} initial={1} onAdd={handleCount}/>
      </>
    )
}

export default ItemListContainer
