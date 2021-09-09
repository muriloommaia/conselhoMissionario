import React from "react";

class Aula1e2 extends React.Component {
  render() {
   
    return (
      <div className='p-4'>
      <div className='box-aula-titulo'>
        <h3>Aulas 1 e 2</h3>
        <hr className='hr50p' />
      </div>
        <div className='d-flex flex-column box-aula justify-content-center'>
          <p className='h4 fs-3 fw-bold paragrafo'>Dez passos para iniciar um conselho missionário</p>
          <p className='h4 fs-3 fw-bold paragrafo'>Primeira Reunião do Conselho Missionário</p>
        </div>
      </div>
    )
  }
}

export default Aula1e2;