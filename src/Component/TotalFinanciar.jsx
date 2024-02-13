// TotalFinanciar.jsx
import React from 'react';

class TotalFinanciar extends React.Component {
  render() {
    const { cuotaInicial, precioProducto } = this.props;

    // Lógica para calcular el total a financiar
    const totalFinanciar = precioProducto - cuotaInicial;

    return (
      <div>
        <p>Total a Financiar: {totalFinanciar.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })}</p>
      </div>
    );
  }
}

export default TotalFinanciar;
