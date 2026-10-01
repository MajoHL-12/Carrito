import React from 'react'

export const Cart = ({ cart,quitarCart}) => {
  return (
<div className='bg-slate-200 py-8 px-8'>
    <h2 className='flex justify-center text-2xl font-bold text-slate-800 mb-6'>
        Carrito
    </h2>

    {/*Mostramos los productos en el carrito*/}
    {cart.map((product) => (
        <div key={product.id} className='flex flex-col gap-3 bg-white border border-slate-200 rounded-xl w-64 p-6 m-2 shadow-md hover:shadow-lg transition-shadow duration-300'>
            <h3 className='text-lg font-bold text-slate-800'>{product.name}</h3>
            <p className='text-sm text-slate-500'>{product.description}</p>
            <p className='font-semibold text-slate-700'>Cantidad: {product.quantity}</p>

            <button className='bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-200' onClick={() => quitarCart(product)}>
                Eliminar del carrito
            </button>
        </div>
    ))}
</div>
  )
}
