import React from 'react';

class AulaDez extends React.Component {
  render() {
    return (
        <div className='p-4'>
          <div className='box-aula-titulo'>
            <h3>Aula 10</h3>
          </div>
          <div className='container'>
            <div className='row box-aula align-items-center'>
              <div className='col'>
                <p className='h4 fs-3 fw-bold paragrafo'>
                  Cuidado Integral do Missionário
                </p>
                <p className='h4 fs-3 paragrafo'>
                  CIM
                </p>
              </div>
              <div className='col border-start border-dark'>
                <p className='h3 fs-4 fw-light paragrafo'>
                  Cuidando do coração do seu missionário
                </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default AulaDez;