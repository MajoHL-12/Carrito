import React from 'react'
//se crea con rafc 

// () => significa: creo una función sin parámetros
export const NavBar = () => {
  return (
    <div className='flex justify-center items-center bg-[#263300] text-white py-4 shadow-md'>
        <ul className='list-none flex gap-10 font-bold cursor-pointer'>
            <li className='hover:text-lime-300 transition-colors duration-200'>
                <a>Catalogo</a>
            </li>
            <li className='hover:text-lime-300 transition-colors duration-200'>
                <a>Carrito</a>
            </li>
        </ul>
    </div>
  )
}
