import React from 'react'

//NOTAS DE CATALOGO
    // Recibimos PROPS desde CatCar.
    // products   → productos del catálogo.
    // addToCart  → función para agregar productos.
export const Catalogo = ({products, addToCart}) => {


  return (
    // NOTAS PRODUCTS.MAP
        //map() → recorre products.
        // product → producto actual.
    <div className='flex flex-wrap justify-center gap-6 p-8'>
    {products.map((product)=>( 
        <div key={product.id} className='flex flex-col gap-3 bg-white border border-slate-200 rounded-xl w-64 p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
                <h3 className='flex justify-center text-xl font-bold text-slate-800'>{product.name}</h3>
                <h5 className='flex justify-center text-sm text-slate-500 text-center'>{product.description}</h5>
                <h5 className='flex justify-center text-sm font-semibold text-[#566700]'>
                    Stock: {product.quantity}
                </h5>

                <button className='bg-[#566700] text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-[#3f4c00] disabled:bg-slate-300 disabled:text-slate-500 transition-colors duration-200' disabled={product.quantity === 0} onClick={() => addToCart(product)}>
                    {product.quantity === 0 ? "AGOTADO" : "Agregar al carrito"}
                </button>

                {/* onClick → ocurre al hacer click.
                () => addToCart(product)
                → ejecuta addToCart
                → enviándole el producto.
                disabled → desactiva el botón
                Si quantity es 0:
                → botón desactivado.*/}
            </div>
        ))}
    </div>
      )
}
