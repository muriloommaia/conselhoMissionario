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
            <p>Data de Início</p>
            <p>02/10/2021</p>
          </div>
          <div className='d-flex flex-column align-items-center justify-content-envenly'>
            <p>Horario das Aulas</p>
            <p>das 15h às 16:30h</p>
          </div>
          <div className='d-flex flex-column align-items-center justify-content-envenly'>
            <p>Data de Finalização</p>
            <p>04/12/2021</p>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <h4>Plataforma</h4>
          <a href='https://zoom.us/download' target="_blank" rel="noreferrer">
            <div className='icon-zoom px-3 py-2'>
              <i className="fas fa-video"></i>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default DataInformacoes;