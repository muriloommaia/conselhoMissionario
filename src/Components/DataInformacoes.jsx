import React from "react";
import './CSS/dataInformation.css'
class DataInformacoes extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center justify-content-evenly'>
      <div className="d-flex w-100 bg-light flex-column align-items-center justify-content-evenly pt-3">
        
        <h3>Informações Importantes</h3>
        <hr className='hr50' />
        <div className='d-flex justify-content-center data-information align-items-center flex-wrap'>
          <div className='d-flex flex-column align-items-center justify-content-envenly'>
            <p className='fw-bold'>Mês das aulas</p>
            <p className="mt-0">Fevereiro</p>
          </div>
          <div className='d-flex flex-column align-items-center justify-content-envenly'>
            <p className='fw-bold'>Dias de Aula</p>
            <p className="my-0">10, 11 e 12 - </p>
            <p className="my-0">Quinta, sexta e sábado</p>
          </div>
        </div>
        <div className="d-flex justify-content-evenly align-items-center flex-wrap">
          <div className="d-flex align-items-center pe-2">
            <p className="fw-bold">Horários de aula: *</p>
          </div>
          <div className='d-flex flex-column justify-content-envenly ps-2'>
            <p className="my-0">Quinta-Feira: 19 - 21:30 hrs</p>
            <p className="my-0">Sexta-Feira: 19 - 21:30 hrs</p>
            <p className="my-0">Sábado: 08 - 12 hrs e 14 - 17 hrs</p>
          </div>
        </div>
          <p className="diminute pt-2">* Horários com referência à Campo Grande - MS</p>
      </div>
        <div className="d-flex justify-content-around w-50 pt-3">
          <div className='d-flex flex-column align-items-center'>
            <h4 className="text-center">Aulas no formato</h4>
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
            <h4 className="text-center">Plataforma Virtual</h4>
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