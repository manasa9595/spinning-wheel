import React from "react";
import { NavLink } from 'react-router-dom';

class SignUP extends React.Component {
  render() {
    return (
        <>
            {/* <div className="insurance-border">
                <NavLink to="/"><button className="arrow"></button>  </NavLink>
            </div> */}
            <div className="signUp-image"></div>
            <div className="secure-next-buttona">
            <NavLink to="/">
                <div className="share-button next-button">
                  NOT NOW
                </div>
              </NavLink>
              <NavLink to="/">
                <div className="next-button">
                  CONTINUE
                </div>
              </NavLink>
            </div>
            </>
    )
  }
}
export default SignUP;
