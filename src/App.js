import React, { Fragment } from 'react';
import Header from './component/Header'
import Formulario from './component/Formulario'

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container mt-5">
        <div className="row">
<Formulario />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
