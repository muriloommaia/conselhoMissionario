import React from 'react';

class AulaNove extends React.Component {
  render() {
    const imagens = ['igrejaLocal', 'igrejaParceira', 'agenciaM', 'target'];
    const text = ['Igreja Local', 'Igreja Parceira', 'Agência Missionária', 'Impacto Exponencial']
    return (
      <div className='p-4'>
        <div className='box-aula-titulo'>
          <h3>Aula 9</h3>
        </div>
        <div className='container'>
          <div className='row box-aula align-items-center'>
            <div className='d-flex justify-content-evenly flex-wrap'>
              {text.map((item, idx) => {
                return (
                  <div className='d-flex flex-column align-items-center'>
                  <div className='image-aula-nove' >
                    <img
                      src={`imagens/${imagens[idx]}.png`}
                      alt={imagens[idx]}
                      
                    />
                  </div>
                    <p>{item}</p>
                  </div>
                )
              })}
            </div>
            <div className='col'>
              <p className='h4 fs-3 fw-bold paragrafo'>
                Recursos financeiros
              </p>
            </div>
            <div className='col border-start border-dark'>
              <p className='h3 fs-4 fw-light paragrafo'>
                critérios para apoio financeiro da igreja local para cada realidade missionária
              </p>
            </div>
          </div>
        </div>
      </div>

    )
  };
}

export default AulaNove;