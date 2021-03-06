import React from "react";
import Aula1e2 from "./aulasComponents/Aula1e2";
import Aula345 from "./aulasComponents/Aula345";
import AulaDez from "./aulasComponents/AulaDez";
import AulaNove from "./aulasComponents/AulaNove";
import AulaOito from "./aulasComponents/AulaOito";
import AulaSeis from "./aulasComponents/AulaSeis";
import AulaSete from "./aulasComponents/AulaSete";
import './CSS/aulas.css'
class Aulas extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    }
  }

  onClick = (idx) => {
    this.setState({
      index: idx,
    })
  }
  render() {
    const { index } = this.state;
    const aulas = ['Aula 1 e 2', 'Aulas 3 a 5', 'Aula 6', 'Aula 7', 'Aula 8', 'Aula 9', 'Aula 10'];
    const classes = [<Aula1e2 />, <Aula345 />, <AulaSeis />, <AulaSete />, <AulaOito />, <AulaNove />, <AulaDez />];
    return (
      <section className='bg-light p-2 pt-4 text-center'>
        {/* <hr className='hr50'/> */}
        <h1>Programa de Aulas</h1>
        <p><span className="fw-bold">Dia 1</span> - Aulas 1 e 2  |  <span className="fw-bold">Dia 2</span> - Aulas 3 e 4</p>
        <p><span className="fw-bold">Dia 3</span> - <span className="fw-bold">Manhã</span> - Aulas 4 à 7 | <span className="fw-bold">Tarde</span> - Aulas 8 à 10</p>
        {aulas.map((item, idx) => {
          return (
            <button
              key={idx}
              className='btn btn-dark m-2'
              onClick={() => this.onClick(idx)}> {item}
            </button>
          )
        })}
        <div className='text-center'>
          {classes[index]}
        </div>
      </section>
    )
  }
}

export default Aulas;
