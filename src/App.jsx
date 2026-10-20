import { NavBar } from "./Components/NavBar"
import { CatCar } from "./Components/CatCar"
import { CartProvider } from "./Context/CartProvider"
import { BrowserRouter } from "react-router"

//rutas
import { Routes,Route } from "react-router"
import { Catalogo } from "./Components/Catalogo"
import { Cart } from "./Components/Cart"
import { AddItem } from "./Components/AddItem"


function App()
{

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Catalogo/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/add" element={<AddItem/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
