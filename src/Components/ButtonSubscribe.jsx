import React from "react";
import './CSS/buttonSubscribe.css'

class ButtonSubscribe extends React.Component {
  render () {
    return (
      <div className='text-center'>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSclPy8eTR7cnrFaOpJpelESCMPI8Y6jE-43pEgjBvRXsda89g/viewform?usp=sf_link' target='_blank' rel="noreferrer">
        <button type='button' className="btn btn-success p-3">
          Faça sua inscrição
        </button>
      </a>
      </div>
    )
  }
}

export default ButtonSubscribe