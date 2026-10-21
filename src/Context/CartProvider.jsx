import React from 'react'
import { CartContext } from './CartContext'
import { useState } from 'react'



export const CartProvider = ({children}) => {

    const [ products, setProducts] = useState([
            {name:"Camaras", id:1, quantity : 3, description:"Ultima generación"},
            {name:"Tripie", id:2, quantity : 7, description:"Estabilidad asegurada"},
            {name:"Micros", id:3, quantity : 9, description:"El mejor sonido posible"},
            {name:"Lentes", id:4, quantity : 2, description:"Ultra definición"},
        ])
    
    
        // NOTAS USESTATE CARRITO
        // cart = productos que están en el carrito.
        // setCart = función para modificar el carrito.
        // [] significa que empieza vacío.
        //Este const es para los productos que se van a mostrar en el carrito
        const [ cart, setCart] = useState([])

        // NOTAS CONTADOR
        // cart = contiene los productos agregados al carrito.
        // reduce() = recorre todos los productos y suma sus cantidades.
        // total = va acumulando la suma.
        // item.quantity = cantidad de cada producto.
        // 0 = el contador empieza en cero.

        const cont = cart.reduce((total, item) => {
            return total + item.quantity
        }, 0)

    
        //NOTAS ADDTOCART
        // Esta función recibe el producto que seleccionamos.
        // product = producto que pulsamos en el catálogo. Es el producto que seleccionaste.
        const addToCart = (product) => {
            //Aunque en el boton ya desactivamos el boton eso es simple interfaz, ponerlo aquí sirve en la lógica del código 
                if (product.quantity === 0) {
                    return
                }
            //NOTAS PRODUCT IN CART
                // Buscamos si el producto ya esta en el carrito
                // find() busca un producto dentro del carrito.
                // item = cada producto que estamos revisando.
                // === compara.
                // Buscamos si ya existe un producto con el mismo id.
                // item = lo que recibo
                // =>   = hago algo con eso
            const productInCart = cart.find(item => item.id === product.id) 
            //Si ya existe aumentamos su cantidad
            if (productInCart) {
                //NOTAS CART.MAP
                    // map() recorre el carrito.
                    // Buscamos el producto que acabamos de agregar
                    // y aumentamos su cantidad.
                setCart(cart.map(item => {
                        //NOTAS DEL IF --> Compara el id del item seleccionado con los productos que se muestran en el catalago 
                        if (item.id === product.id) {
                            return {...item,quantity: item.quantity + 1}}
                        //Los demas productos no cambian
                        return item
                    }))
            } else {
                //NOTAS SI NO EXISTE EN EL CARRO 
                    //  ...cart → conserva lo anterior.
                    // ...product → copia el producto.
                    // quantity: 1 → empieza con una unidad.
                    //Si no existe lo agregamos con cantidad 1
                setCart([ ...cart, {...product,quantity: 1}])
            }
            //RESTAR AL CATALOGO
            // map() → recorremos products.
            setProducts(products.map(item => {
                // Encontramos el producto seleccionado
                if (item.id === product.id) {
                    // Copiamos el producto y restamos 1 al stock.
                    return {...item,quantity: item.quantity - 1}
                }
                // Los demás productos no cambian
                return item
            }))
        }
    
        const quitarCart = (product) => {
            const productInCart = cart.find(
                item => item.id === product.id
            )
            if (productInCart) {
                const newCart = []
                cart.forEach(item => {
                    if (item.id === product.id) {
                        if (item.quantity > 1) {
                            newCart.push({...item,quantity: item.quantity - 1})
                        }
                    } else {
                        newCart.push(item)
                    }
                })
                setCart(newCart)
            }

            setProducts(products.map(item => {
                if (item.id === product.id){
                    return {...item, quantity: item.quantity +1}
                }
                return item
            }))
        }

  return (
    <CartContext.Provider
        value={{
            products,
            cart,
            addToCart,
            quitarCart,
            setProducts,
            cont
        }}
    >
        {children}
    </CartContext.Provider>
  )
}
