import React from "react";
import './CSS/information.css'
const stonks = require('../arquivosPDF/imagens/stonks.png').default;
const aulasIn = require('../arquivosPDF/imagens/aulasIn.png').default;
const tempoAula = require('../arquivosPDF/imagens/tempoAula.png').default;

class Information extends React.Component {
  render() {
    const textInformation = ['Aula presencial e virtual', '3 dias de aula', 'Investimento de R$ 50,00'];
    const imageInformation = [aulasIn, tempoAula, stonks];

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