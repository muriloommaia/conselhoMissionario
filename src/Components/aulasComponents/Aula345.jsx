import React from "react";

class Aula345 extends React.Component {
  render() {

    return (
      <div className='p-4'>
        <div className='box-aula-titulo'>
          <h3>Aulas 3 a 5</h3>
          <hr className='hr50p px-5' />
        </div>
        <div className='container'>
          <div className='row box-aula align-items-center'>
            <div className='col'>
              <p className='h4 fs-3 fw-bold paragrafo'>
                Filosofia Missionária da Igreja Local
              </p>
              <p className='h4 fs-3 paragrafo'>
                Parte 1, 2 e 3
              </p>
            </div>
            <div className='col border-start border-dark'>
              <p className='h3 fs-4 fw-light paragrafo'>
                São princípios fundamentais para proteger o missionário e a igreja
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Aula345;