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
if (timeLeft() < 0) return (
  <div className='d-flex flex-column align-items-center mb-3 mx-auto'>
  <h2>Nova Turma</h2>
  <h3>Faça sua inscrição para a turma de fevereiro de 2022</h3>
  <cite>As vagas são limitadas</cite>
</div>
)
return (
  <div className='d-flex justify-content-center mb-3'>
    <h3>Faltam <span className='fs-2'>{ timeLeft() }</span> dias</h3>
  </div>
)
}

export default ClockDay;