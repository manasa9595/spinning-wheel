import React from "react";
import { NavLink } from 'react-router-dom'; 

class Dashboard extends React.Component {
  render() {
    return (
        <>
            <div className="insurance-border Dashboard-top">
                <NavLink to="/"> <button className="arrow"></button> </NavLink>
                <span className="text">Coupons</span>
            </div>
            <div className="couponBoard-image"></div>
        </>
    )
  }
}
export default Dashboard;
