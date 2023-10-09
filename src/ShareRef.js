import React from "react";
import { NavLink } from 'react-router-dom';

class ShareRef extends React.Component {
  render() {
    return (
        <>
            <div className="insurance-border">
                <NavLink to="/"><button className="arrow"></button>  </NavLink>
                <span className="text">Share Referral Message</span>
            </div>
            <NavLink to="/whatsapp">
            <div className="ShareRef-image"></div>
            </NavLink>
        </>
    )
  }
}
export default ShareRef;
