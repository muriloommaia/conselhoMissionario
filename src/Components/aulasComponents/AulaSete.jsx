import React from 'react';

class AulaSete extends React.Component {
  render() {
    return (
      <div className='p-4'>
        <div className='box-aula-titulo'>
          <h3>Aula 7</h3>
          <h4>Agências Missionárias, Adoção de Pequenos grupos e culto de envio</h4>
        </div>
        <div className='container'>
          <div className='row box-aula align-items-center justify-content-evenly'>
            <div className='col'>
              <p className='h4 fs-3 fw-bold paragrafo'>
                Por que ter uma Agencia Missionária?
              </p>
            </div>
            <div className='col border-start border-dark'>
              <ul className='h3 fs-4 fw-light paragrafo text-start'>
                <li><i className="fas fa-check-circle arrow-teal"></i> Parceria segura</li>
                <li><i className="fas fa-check-circle arrow-teal"></i> Apoio e Supervisão</li>
                <li><i className="fas fa-check-circle arrow-teal"></i> Emergência</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AulaSete;