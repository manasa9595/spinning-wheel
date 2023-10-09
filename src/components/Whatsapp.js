import React from "react";
import { NavLink } from 'react-router-dom';

class Whatsapp extends React.Component {
  render() {
    return (
        <>
            <div className="insurance-border">
                <NavLink to="/"><button className="arrow"></button>  </NavLink>
            </div>
              <NavLink to="/signUp">
            <div className="whatsapp-image"></div>
              </NavLink>
            </>
    )
  }
}
export default Whatsapp;
