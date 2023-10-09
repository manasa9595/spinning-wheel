import React from "react";
import { NavLink } from 'react-router-dom';

class TransactionPage2 extends React.Component {
  render() {
    return (
        <>
            <div className="insurance-border">
                <NavLink to="/"><button className="arrow"></button>  </NavLink>
                <span className="text">Confirm Payment Details</span>
            </div>
            <div className="TransactionPage2-image"></div>
            <div className="next-buttona">
              <NavLink to="/">
                <div className="next-button">
                Confirm
                </div>
              </NavLink>
            </div>
        </>
    )
  }
}
export default TransactionPage2;
