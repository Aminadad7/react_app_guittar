
import { Footer } from "./Components/Footer"
import { Guitarra } from "./Components/Guitarra"
import { Header } from "./Components/Header"
import {useCart} from "./hooks/useCart"


function App() {
  const {
    data,
        cart,
        addToCart,
        vaciarCarrito,
        incrementarCantidad,
        decrementarCant,
        deleteFromCart,isEmpty,carTotal} = useCart()
  
  return (
    <>
      
    <Header 
      cart = {cart}
      deleteFromCart = {deleteFromCart}
      incrementarCantidad = {incrementarCantidad}
      decrementarCant = {decrementarCant}
      vaciarCarrito ={vaciarCarrito}
      isEmpty={isEmpty}
      carTotal={carTotal}
     />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
        {data.map((guitar)=>
          (
            <Guitarra 
            key={guitar.id}
            guitar={guitar}
            addToCart={addToCart}
            />
          )
        )}
    </div>
  </main>


    <Footer />

    </>
  )
}

export default App
