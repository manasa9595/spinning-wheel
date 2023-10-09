import React from "react";
import { NavLink } from 'react-router-dom'; 

class CoinHistory extends React.Component {
  render() {
    return (
        <>
            <div className="insurance-border Dashboard-top">
                <NavLink to="/"> <button className="arrow"></button> </NavLink>
                <span className="text">Coins History</span>
            </div>
            <div className="coin-history-image"></div>
        </>
    )
  }
}
export default CoinHistory;
