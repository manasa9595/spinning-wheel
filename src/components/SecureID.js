import React from "react";
import { NavLink } from 'react-router-dom'; 

class SecureID extends React.Component {
  render() {
    return (
        <>
            <div className="insurance-border Dashboard-top">
                <NavLink to="/"> <button className="arrow"></button> </NavLink>
                <span className="text">Question Answer</span>
            </div>
            <div className="SecureID-image"></div>
            <div className="secure-next-buttona">
            <NavLink to="/ShareAndEarn">
              <div className="share-button next-button">
                Share with friends
              </div>
            </NavLink>
            <NavLink to="/SecureUpload">
              <div className="next-button">
                Next
              </div>
            </NavLink>
          </div>
        </>
    )
  }
}
export default SecureID;
