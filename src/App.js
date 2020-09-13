import React from 'react';
import Header from './component/Header'
import Formulario from './component/Formulario'
import ListaRecetas from './component/ListaRecetas'
import CategoriasProvider from './context/CategoriasContext'
import RecetasProvider from './context/RecetasContext'

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
          <ListaRecetas />
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
