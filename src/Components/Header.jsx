import React from "react";
import './CSS/header.css'
class Header extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center p-3 bg-image">
        <div className='box-header'></div>
        <div className="header">
          <h2>Organizar o</h2>
          <h1>Conselho Missionário</h1>
          <h2>Da sua igreja Local</h2>
          <p>Pr. Djalma Albuquerque</p>
        </div>
      </div>
    )
  }
}

export default Header;
