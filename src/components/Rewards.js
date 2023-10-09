import React from "react";
import { NavLink } from 'react-router-dom';

class Rewards extends React.Component {
  render() {
    return (
      <>
        <div className="coupon-wrap">
        <NavLink to="/CouponBoard">
          <span className="coupon"></span>
          <span className="coupon-content">Coupon</span>
        </NavLink>
        </div>
        <div className="dashboard-wrap">
          <NavLink to="/Dashboard">
            <span className="dashboard"></span>
            <span className="dashboard-content">Dashboard</span>
          </NavLink>
        </div>
      </>
    )
  }
}
export default Rewards;