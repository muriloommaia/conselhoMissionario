import React from 'react';

class AulaOito extends React.Component {
  render() {
    const text = ['Planejamento', 'Relatório', 'Carta', 'Vídeos'];
    return (
      <div className='p-4'>
        <div className='box-aula-titulo'>
          <h3>Aula 8</h3>
          <hr className='hr50p' />
          <h4>Relatórios (por parte dos missionários)</h4>
        </div>
        <div className='container d-flex box-aula align-items-center justify-content-evenly'>
          <div className='relatorios d-flex flex-wrap'>
            {text.map((item, idx) => {
              if (idx !== 3) {
                return (
                  <>
                    <p className='h4 paragrafo d-flex align-items-center'>{item.toLocaleUpperCase()}</p>
                    <i className="fas fa-arrow-circle-right d-flex align-items-center arrow-teal fs-5"></i>
                  </>
                )
              } else {
                return (
                  <>
                    <p className='h4 paragrafo d-flex align-items-center'>{item.toLocaleUpperCase()}</p>
                  </>
                )
              }
            })}
          </div>
        </div>
      </div>

    )
  }
}

export default AulaOito;