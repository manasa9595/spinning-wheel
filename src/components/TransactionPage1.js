import React from "react";
import { NavLink } from 'react-router-dom';

class TransactionPage1 extends React.Component {
  render() {
    return (
        <>
            <div className="insurance-border">
                <NavLink to="/"><button className="arrow"></button>  </NavLink>
                <span className="text">Share using mobile number</span>
            </div>
            <div className="TransactionPage1-image"></div>
            <div className="next-buttona">
              <NavLink to="/TransactionPage2">
                <div className="next-button">
                Fund Transfer
                </div>
              </NavLink>
            </div>
        </>
    )
  }
}
export default TransactionPage1;
