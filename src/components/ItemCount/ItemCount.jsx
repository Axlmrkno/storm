import React, {useState}from 'react'
import './ItemCount.css'



export const ItemCount = ({initial, stock, onAdd}) => {
const [cantidad, setCantidad] = useState(initial)

    const handleAdd=()=>{
        if(cantidad<stock){
            setCantidad(cantidad+1)
        }

    }
    const handleRemove=()=>{
        if (cantidad>initial){
            setCantidad(cantidad-1)
        }

    }
    return (
        <div className = "card text-center w-10">
            <div className= "card-header">
            <h4>ItemCount</h4>
            </div>
            <div className = "card-body">
              <button className=" btn btn-primary btn-block" onClick= {handleAdd}>+</button>
              <label className= "alert alert-white">{cantidad}</label>
              <button className= "btn btn-primary" onClick = {handleRemove}> -</button>
              <div>
              <button className = "btn btn-primary btn-block" onClick = {()=>onAdd(cantidad)}>Add to Cart</button>
              </div>
             
            </div>
           
     
   
        </div>
    )
}
