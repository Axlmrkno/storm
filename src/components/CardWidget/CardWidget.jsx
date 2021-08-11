import React from 'react'
//impotacion de la imagen del carrito
import cart from './carrito.png'
import './CarWidget.css'


const CardWidget = () => {
    return (
        <div> 
            <img src ={cart} alt='cart'className="cart"/>
        </div>
    )
}

export default CardWidget

