import React from "react";

function ClockDay () {
  const timeLeft = () => {
    const dataOficial = new Date("10/02/2021");
    const dataHoje = new Date();
    const diferenca = dataOficial.getTime() - dataHoje.getTime();
    const milisegundos = 1000*60*60*24;
    const diaFaltante = Math.floor(diferenca/milisegundos);
    return diaFaltante
  }

return (
  <div className='d-flex justify-content-center mb-3'>
    <h3>Faltam <span className='fs-2'>{ timeLeft() }</span> dias</h3>
  </div>
)
}

export default ClockDay;