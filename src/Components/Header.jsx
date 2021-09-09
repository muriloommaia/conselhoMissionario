import React from "react";
import './CSS/header.css'
class Header extends React.Component {
  render () {
    return (
      <div className="d-flex flex-column align-items-center p-3 bg-image">
      <div className="header">
        <h1>Conselho Missionário</h1>
      </div>
    </div>
    )
  }
}

export default Header;
