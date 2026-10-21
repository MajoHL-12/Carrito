import React, { useContext } from 'react'
//se crea con rafc 
import { CartContext } from '../Context/CartContext'
import { useNavigate } from "react-router"

// () => significa: creo una función sin parámetros
export const NavBar = () => {
  
    const navigate= useNavigate();
    const {products} =useContext(CartContext);
    const {cont} = useContext(CartContext)

return (
    <div className='flex justify-center items-center bg-[#263300] text-white py-4 shadow-md'>
        <ul className='list-none flex gap-10 font-bold cursor-pointer'>
            <li className='hover:text-lime-300 transition-colors duration-200'>
                <a onClick={() => navigate("/")}> Catalogo </a>
            </li>
            {/* CARRITO CON CONTADOR */}
            <li className='hover:text-lime-300 transition-colors duration-200'>
                <a onClick={() => navigate("/cart")} className='flex items-center gap-2'>
                    Carrito
                    <span className='bg-[#566700] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center'>
                        {cont}
                    </span>
                </a>
            </li>
            <li className='hover:text-lime-300 transition-colors duration-200'>
                <a onClick={() => navigate("/add")}>
                    Agregar Producto
                </a>
            </li>
        </ul>
    </div>
)
}
