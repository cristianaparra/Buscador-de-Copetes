import React, { createContext, useEffect, useState } from 'react';
import Axios from 'axios'

export const ModalContext = createContext();

const ModalProvider = (props) =>{
    //state del provider

    const [idreceta, guardarIdReceta]=useState(null);

    return(
        <ModalContext.Provider
        value={{
            idreceta,
            guardarIdReceta
        }}>
            {props.children}
        </ModalContext.Provider>

    )
}

export default ModalProvider;