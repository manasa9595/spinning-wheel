import React from "react";
import { NavLink } from 'react-router-dom'

class Travelling extends React.Component {
  render() {
    return (
        <>
            <div className="discount-title">
                10% discount on all parts
            </div>
            <input type="button" value="Avail Now" className="apply-now"></input>
            <div className="discount-title">
                Apply now for Accident Insurance without paying anything. <span className="terms">T&C</span>
            </div>
            <button type="button" className="apply-now">
              <NavLink to="/TravalInsurance"> Apply Now </NavLink>
            </button>
        </>
    )
    
  }
}
export default Travelling;
