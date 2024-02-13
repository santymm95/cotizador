import { useState } from 'react';
import '../App.css';
import motoNegra from '../images/1-Boxer-ct-100-es-gris-grafito.png';
import motoGris from '../images/1-Boxer-ct-100-es-gris.webp';
import motoRoja from '../images/1-Boxer-ct-100-es-rojo_1.webp';
import BotonesColor from './BotonesColor';

const Card = ({ onCotizarClick, precio }) => {
  const [imagen, setImagen] = useState(motoNegra); // Estado para la imagen

  const handleImageChange = (color) => {
    switch (color) {
      case 'red':
        setImagen(motoRoja);
        break;
      case 'green':
        setImagen(motoGris);
        break;
      case 'blue':
        setImagen(motoNegra);
        break;
      default:
        setImagen(motoNegra);
    }
  };

  const formattedPrice = precio.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });

  return (
    <div className="card">
      <img src={imagen} alt="Producto" className="card-image" />
      <BotonesColor onChangeImage={handleImageChange} />
      <p className="card-price">{formattedPrice}</p>
      <button onClick={() => onCotizarClick(precio)} className="cotizar-button">
        Cotizar
      </button>
    </div>
  );
};

export default Card;
