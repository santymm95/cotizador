import React, { Component } from 'react';
import '../assets/stylesCSS/form.css';
import TotalFinanciar from './TotalFinanciar';

class FinanciamientoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuotaInicial: '',
      mesesFinanciamiento: '',
      totalFinanciar: 0,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (parseFloat(this.state.cuotaInicial) > this.props.precioProducto) {
      alert('La cuota inicial no puede ser mayor al valor del producto.');
      return;
    }

    const mesesFinanciamiento = parseInt(this.state.mesesFinanciamiento, 10);
    let aumentoPorcentaje = 0;

    if (mesesFinanciamiento === 12) {
      aumentoPorcentaje = 0.10;
    } else if (mesesFinanciamiento === 24) {
      aumentoPorcentaje = 0.20;
    } else if (mesesFinanciamiento === 34) {
      aumentoPorcentaje = 0.30;
    } else if (mesesFinanciamiento === 48) {
      aumentoPorcentaje = 0.40;
    }

    const totalFinanciar =
      (this.props.precioProducto - parseFloat(this.state.cuotaInicial)) * (1 + aumentoPorcentaje);

    this.setState({ totalFinanciar });

    // Mostrar alerta con el valor total
    alert(`El valor total a financiar es: ${totalFinanciar.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })}`);

    // Abrir ventana de impresión
    window.print();

    // Puedes manejar la lógica adicional aquí
  };

  render() {
    const formattedPrice = this.props.precioProducto.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    });

    return (
      <div className='container-form'>

      <form onSubmit={this.handleSubmit}>
        <h2>Datos del usuario</h2>
        <input type="text" placeholder='Nombre' name="nombre" autoComplete='off' />
        <input type="text" placeholder='Apellido' name="apellido" autoComplete='off' />
        <input type="number" placeholder='Celular' name="documento" autoComplete='off' />
        <input type="email" placeholder='Correo' id="email" name="correo" autoComplete='off' />

        <label>
          <p>Cuota Inicial:</p>
          <input
            type="number"
            name="cuotaInicial"
            value={this.state.cuotaInicial}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <label>
          <p>Meses de Financiamiento:</p>
          <select
            name="mesesFinanciamiento"
            value={this.state.mesesFinanciamiento}
            onChange={this.handleChange}
            required
          >
            <option value="">Selecciona</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
            <option value="34">36 meses</option>
            <option value="48">48 meses</option>
          </select>
        </label>
        <br />
        <p>Valor del Producto: {formattedPrice}</p>
        <TotalFinanciar
          cuotaInicial={parseFloat(this.state.cuotaInicial)}
          precioProducto={this.props.precioProducto}
        />
        <p>Total a Financiar: {this.state.totalFinanciar.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })}</p>

        <button type="submit">Calcular Financiamiento</button>
        <button type="button" onClick={this.props.onVolverAProducto}>
          Volver al Producto
        </button>
      </form>
      </div>
    );
  }
}

export default FinanciamientoForm;
