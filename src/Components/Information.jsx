import React from "react";
import './CSS/information.css'

class Information extends React.Component {
  render() {
    const textInformation = ['10 Aulas com interação', '1 hora e 30 minutos para cada aula', 'Investimento de R$ 50,00'];
    const imageInformation = ['imagens/aulasIn.png', 'imagens/tempoAula.png', 'imagens/stonks.png'];

    return (
      <div className="container">
        <div className="row">
          { textInformation.map((item, idx) => {
            return (
          <div key={ idx } className="col box-information">
            <div className='text-information text-center d-flex align-items-center justify-content-center'>
              <p className='h3'>
                { item }
              </p>
            </div>
            <div className='image-information text-center'>
              <img src={ imageInformation[idx] } alt={ item } />
            </div>
          </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Information