import React from "react";
import './CSS/buttonSubscribe.css'

class ButtonSubscribe extends React.Component {
  render () {
    return (
      <div className='text-center'>
      <a href='https://forms.gle/otdzyTSukgiA9Jka8' target='_blank' rel="noreferrer">
        <button type='button' className="btn btn-success p-3">
          Faça sua inscrição
        </button>
      </a>
      </div>
    )
  }
}

export default ButtonSubscribe