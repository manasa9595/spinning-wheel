import React from "react";
import { NavLink } from 'react-router-dom'; 

class CurrentInsurance extends React.Component {
  render() {
    return (
        <>
            <div className="insurance-border CurrentInsurance-top">
                <NavLink to="/"> <button className="arrow"></button> </NavLink>
            </div>
            <div className="CurrentInsurance-icon"></div>
            <div className="next-buttona">
              <NavLink to="/">
                <div className="next-button">
                GET STARTED
                </div>
              </NavLink>
            </div>
        </>
    )
  }
}
export default CurrentInsurance;
