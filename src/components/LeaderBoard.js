import React from "react";
import { NavLink } from 'react-router-dom'; 

class LeaderBoard extends React.Component {
  render() {
    return (
        <>
            <div className="insurance-border Dashboard-top">
                <NavLink to="/"> <button className="arrow"></button> </NavLink>
                <span className="text">Leaderboards Badge</span>
            </div>
            <div className="LeaderBoard-image"></div>
        </>
    )
  }
}
export default LeaderBoard;
