import React from 'react';
import Header from './component/Header'
import Formulario from './component/Formulario'
import CategoriasProvider from './context/CategoriasContext'

function App() {
  return (
    <CategoriasProvider>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategoriasProvider>
  );
}

export default App;
