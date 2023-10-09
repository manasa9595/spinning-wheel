import React from "react";
import { NavLink } from 'react-router-dom'; 

class Dashboard extends React.Component {
  render() {
    return (
        <>
            <div className="insurance-border Dashboard-top">
                <NavLink to="/"> <button className="arrow"></button> </NavLink>  
                <span className="text">Dashboard</span>
            </div>
            <div className="Dashboard-image"></div>
            <div className="secure-next-buttona">
              <div className="share-button next-button withdraw">
                WITHDRAW
              </div>
              <div className="next-button continue">
                CONTINUE
              </div>
          </div>
        </>
    )
  }
}
export default Dashboard;
