import { useState } from 'react';
import './App.css'
import Card from './Component/Card';
import Header from './Component/Header';
import FinanciamientoForm from './Component/FinanciamientoForm';
import Footer from './Component/Footer';
import Description from './Component/Description';

const App = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [precioProducto, setPrecioProducto] = useState(10000000); // Precio predeterminado (10 millones)

  const handleMostrarFormulario = () => {
    setMostrarFormulario(true);
  };

  const handleVolverAProducto = () => {
    setMostrarFormulario(false);
  };

  return (
    <div>
      <Header /> {/* Agrega el componente Header aquí */}
      {mostrarFormulario ? (
        <FinanciamientoForm
          precioProducto={precioProducto}
          onVolverAProducto={handleVolverAProducto}
        />
      ) : (
        <div className='contenedor-banner'>
          <Description />
          <Card
            precio={precioProducto}
            onCotizarClick={handleMostrarFormulario}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
