import React from "react";
import Aula1e2 from "./aulasComponents/Aula1e2";
import Aula345 from "./aulasComponents/Aula345";
import './CSS/aulas.css'
class Aulas extends React.Component {
  constructor () {
    super();
    this.state = {
      index: 0,
    }
  }

  onClick = (idx) => {
    this.setState ({
      index: idx,
    })
  }
  render() {
    const { index } = this.state;
    const aulas = ['Aula 1 e 2', 'Aulas 3 a 5'];
   const classes = [<Aula1e2 />, <Aula345 /> ];
    return (
      <section className='bg-light p-4 text-center'>
        <h1>Programa de Aulas</h1>
        <hr />
        { aulas.map((item, idx) => {
          return (
            <button onClick={ () => this.onClick(idx) }> {item} </button>
          )
        })}
        <div className='text-center'>
          { classes[index] }
        </div>
      </section>
    )
  }
}

export default Aulas;
