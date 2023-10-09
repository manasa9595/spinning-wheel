import React from "react";
import { NavLink } from 'react-router-dom';

class Share extends React.Component {
  render() {
    return (
        <>
            <div className="insurance-border">
                <NavLink to="/"><button className="arrow"></button>  </NavLink>
                <span className="text">Share using mobile number</span>
            </div>
            <div className="share-icon1"></div>
            <div className="share-icon2"></div>
            <div className="share-title">Share with 10 Friends to avail Accident Insurance.</div>
            <div className="share-content">Share & Earn upto 200 coins for every friend you invite.
            If they open a digisavings account you will get additional 200 coins
            </div>
            <div className="share-content2">You can claim gift or insurance, Mutual fund.
            Also you can unlock this coin to Saving account.<span className="terms">T&C Apply</span>
            </div>
            <input className="share-input" type="text" placeholder="Mobile Number"></input>
            <div className="next-buttona">
              <NavLink to="/CurrentInsurance">
                <div className="next-button">
                Share
                </div>
              </NavLink>
            </div>
        </>
    )
  }
}
export default Share;
