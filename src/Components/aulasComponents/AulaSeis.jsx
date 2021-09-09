import React from 'react';

class AulaSeis extends React.Component {
  render() {
    return (
      <div className='p-4'>
        <div className='box-aula-titulo'>
          <h3>Aula 6</h3>
          <hr className='hr50p' />
        </div>
        <div className='container'>
          <div className='row box-aula align-items-center'>
            <div className='col'>
              <p className='h4 fs-3 fw-bold paragrafo'>
                Escada da vida missionária
              </p>
              <p className='h4 fs-3 paragrafo'>
                Candidatos
              </p>
            </div>
            <div className='col border-start border-dark'>
              <p className='h3 fs-4 fw-light paragrafo'>
                Como identificar um vocacionado
              </p>
              <p className='h3 fs-4 fw-light paragrafo'>
                Trilha de crescimento para o campo
              </p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default AulaSeis;
