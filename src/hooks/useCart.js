import { useState,useEffect } from "react"
import {db} from "../data/db"
export const useCart = ()=>{
    const initialCart = () => {//funcion para mantener el carrito ya guardado en el localstore
    const localStorageCarrito = localStorage.getItem("carrito")
    return localStorageCarrito ? JSON.parse(localStorageCarrito):[] //ternario para saber si esta vacio o no el carrito 
  }
const [data] = useState(db)
const [cart, setCart] = useState(initialCart)
const CANT_MAX = 5
const CANT_MIN = 1

useEffect(()=>{ 
  //persitir mi carrito con la dependencia de cart
  localStorage.setItem("carrito",JSON.stringify(cart))
},[cart])

function addToCart(item){
  item.quantity = 1
    const itemExist = cart.findIndex((car)=>car.id==item.id) 
    
    if(itemExist >=0 ){
    console.log("Existe ya")
    
  }else{
    console.log("No Existe")
    setCart([...cart, item])
      
  }
 
  
 
  
}
function vaciarCarrito(){
  let confirmacion = confirm("Desea Vaciar el carrito?")
  if(confirmacion) setCart([])
}
function decrementarCant(id){
  const updatedCart = cart.map(item=>{
    if(item.id === id && item.quantity > CANT_MIN){
      return{
        ...item,
        quantity: item.quantity - 1
    }
    }
    return item
  })
  setCart(updatedCart)
}
function incrementarCantidad(id){
  const updatedCart = cart.map(item=>{
    if(item.id === id && item.quantity < CANT_MAX){
      return{
        ...item,
        quantity: item.quantity + 1
    }
    }
    return item
  })
  setCart(updatedCart)
}
function deleteFromCart(id){
    console.log("Eliminnando... ", id)
    setCart(cart => cart.filter(guitar => guitar.id !== id))
  }

    return {
        data,
        cart,
        addToCart,
        vaciarCarrito,
        incrementarCantidad,
        decrementarCant,
        deleteFromCart
    }
}
