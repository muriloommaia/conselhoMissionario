import React from "react";
import './CSS/dataInformation.css'
class DataInformacoes extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center justify-content-evenly'>
        <h3>Informações Importantes</h3>
        <hr className='hr50' />
        <div className='d-flex justify-content-evenly data-information align-items-center flex-wrap'>
          <div className='d-flex flex-column align-items-center justify-content-envenly'>
            <p className='fw-bold'>Mês das aulas</p>
            <p>Fevereiro</p>
          </div>
          <div className='d-flex flex-column align-items-center justify-content-envenly'>
            <p className='fw-bold'>Dias de Aula</p>
            <p>10, 11 e 12</p>
          </div>
          <div className='d-flex flex-column align-items-center justify-content-envenly'>
            <p className='fw-bold'>Horários de aula</p>
            <p>Informações em breve</p>
          </div>
        </div>
        <div className="d-flex justify-content-around w-50">
          <div className='d-flex flex-column align-items-center'>
            <h4>Aulas no formato</h4>
            <div className='d-flex px-3 pt-1'>
              <i class="fas fa-user-friends"></i>
              <p className="px-2">Presencial</p>
            </div>
            <div className='d-flex px-3'>
              <i class="fas fa-desktop"></i>
              <p className="px-2">Virtual</p>
            </div>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <h4>Plataforma Virtual</h4>
            <a href='https://zoom.us/download' target="_blank" rel="noreferrer">
              <div className='icon-zoom px-3 py-2 mt-2'>
                <i className="fas fa-video"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default DataInformacoes;