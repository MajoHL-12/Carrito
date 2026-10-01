import React, { useState } from 'react'

// NOTAS USESTATE ADDITEM
// useState sirve para guardar información que puede cambiar.
// item = guarda los datos del artículo que estamos creando.
// AddItem = función que usamos para cambiar los datos de item.
// Aquí empezamos con los campos vacíos porque el usuario los va a escribir.
export const AddItem = ({products, setProducts}) => {

    // Guardamos los datos del nuevo artículo
    const [item, AddItem] = useState({
        name: "",
        id: "",
        quantity: "",
        description: ""
    })

    // NOTAS ADDITEM
    // Esta función se ejecuta cuando presionamos el botón.
    // Su función es crear un nuevo producto y agregarlo al catálogo.
    const addItem = () => {

        // NOTAS NEWPRODUCT
        // Creamos un nuevo producto.
        // item.name = nombre que escribió el usuario.
        // item.id = ID que escribió el usuario.
        // item.quantity = cantidad que escribió el usuario.
        // item.description = descripción que escribió el usuario.
        const newProduct = {
            name: item.name,
            id: item.id,
            quantity: item.quantity,
            description: item.description
        }

        // NOTAS SPREAD PRODUCTS
        // ...products conserva todos los productos que ya existen.
        // newProduct agrega el producto nuevo.
        // Así no borramos los productos anteriores.
        const newProducts = [...products, newProduct]

        // Actualizamos products con la nueva lista de productos.
        // Esto hace que el nuevo artículo aparezca en el catálogo.
        setProducts(newProducts)

        // NOTAS LIMPIAR FORMULARIO
        // Después de agregar el producto,
        // dejamos nuevamente los campos vacíos.
        AddItem({
            name: "",
            id: "",
            quantity: "",
            description: ""
        })
    }

    return (
        <div className='flex flex-col items-center bg-slate-100 py-8 px-4'>

            {/* Título del formulario */}
            <h2 className='text-2xl font-bold text-slate-800 mb-6'>
                Agregar artículo
            </h2>

            {/* NOTAS INPUT
                input = crea una caja donde el usuario puede escribir.
                type='text' = permite escribir texto.
                placeholder = muestra un texto de ayuda dentro de la caja.
                value = muestra el dato que tenemos guardado en item.
                onChange = detecta cuando el usuario escribe.
            */}

            {/* Nombre del producto */}
            <div className='flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md'>

                <input
                    type='text'
                    placeholder='Nombre del artículo'
                    value={item.name}

                    // NOTAS ONCHANGE
                    // onChange se ejecuta cada vez que el usuario escribe.
                    // e = información del evento.
                    // e.target = el input donde estamos escribiendo.
                    // e.target.value = lo que escribió el usuario.
                    // AddItem = actualiza la información de item.
                    // ...item = conserva los demás datos.
                    // name: e.target.value = cambia solamente el nombre.
                    onChange={(e) => AddItem({...item, name: e.target.value})}

                    className='border border-slate-300 rounded-lg p-3'
                />

                {/* ID del producto */}
                <input
                    type='text'
                    placeholder='ID'
                    value={item.id}

                    // Guardamos el ID que escribe el usuario.
                    // ...item conserva nombre, cantidad y descripción.
                    onChange={(e) => AddItem({...item, id: e.target.value})}

                    className='border border-slate-300 rounded-lg p-3'
                />

                {/* Cantidad del producto */}
                <input
                    type='text'
                    placeholder='Cantidad'
                    value={item.quantity}

                    // Guardamos la cantidad que escribe el usuario.
                    onChange={(e) => AddItem({...item, quantity: e.target.value})}

                    className='border border-slate-300 rounded-lg p-3'
                />

                {/* Descripción del producto */}
                <textarea
                    placeholder='Descripción'
                    value={item.description}

                    // Guardamos la descripción que escribe el usuario.
                    onChange={(e) => AddItem({...item, description: e.target.value})}

                    className='border border-slate-300 rounded-lg p-3 resize-none'
                />

                {/* NOTAS BUTTON
                    () => addItem() = ejecuta la función addItem.
                    addItem = agrega el producto al catálogo.
                */}
                <button
                    onClick={() => addItem()}
                    className='bg-[#566700] text-white font-semibold py-3 px-6 rounded-lg'
                >
                    Agregar artículo
                </button>

            </div>
        </div>
    )
}

