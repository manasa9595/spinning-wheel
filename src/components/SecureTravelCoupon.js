import React from "react";
import { NavLink } from 'react-router-dom';

class Share extends React.Component {
  render() {
    return (
        <>
            <div className="discount-title">
                Avail now, One week complimentary Daily Travel Secure Insurance.
            </div>
            <div className="discount-desc">
               Only for active customers. <span className="terms">T&C</span>
            </div>
            <button type="button" className="apply-now">
              <NavLink to="/SecureQA"> Avail Now </NavLink>
            </button>
        </>
    )
  }
}
export default Share;
