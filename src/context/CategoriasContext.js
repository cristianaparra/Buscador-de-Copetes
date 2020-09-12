import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

// crear context
export const CategoriasContext = createContext();

//providr es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {

    //crear el state del context
    const [categorias, guardarCategorias] = useState([]);

    //ejecutar el llamdo a la api
    useEffect(() => {

        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const cateogrias = await Axios.get(url)
            guardarCategorias(cateogrias.data.drinks)
        }
        obtenerCategorias()
    }, [])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;