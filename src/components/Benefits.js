import React from "react";

import { NavLink } from 'react-router-dom'; 

class Benefits extends React.Component {
  render() {
    return (
    <div className="benefits row" style={{paddingRight: "8px"}}>
          <div className="travel wrap">
            <div className="icon">
              <div className="image"></div>
            </div>
            <div className="content">
              <div className="head">Daily Travel Secure
              <span className="calender sub-icon"></span>
              <NavLink to="/SecureQA"><span className="play sub-icon"></span></NavLink></div>
               <div className="desc">Click on Start button to avail and start the journey.<span className="terms">T&C</span>
              </div>
            </div>
          </div>
          <div className="travel-insurance wrap">
            <div className="icon">
              <div className="image"></div>
            </div>
            <div className="content">
              <div className="head">Travel Insurance<span className="movies">Avail Now</span></div>
              <div className="desc">To avail click on the button.
                <span className="terms">T&C</span>
              </div>
            </div>
          </div>
          <div className="mutual wrap">
            <div className="icon">
              <div className="image"></div>
            </div>
            <div className="content">
              <div className="head">Mutual Fund<span className="mutualfund sub-icon"></span></div>
              <div className="desc">Earn and Unlock coins and invest in Mutual Fund.
                <span className="terms">T&C</span>
              </div>
            </div>
          </div>
          <div className="group-health wrap">
            <div className="icon">
              <div className="image"></div>
            </div>
            <div className="content">
              <div className="head">Group Health Policy<span className="movies">Avail Now</span></div>
              <div className="desc">To avail click on the button.
                <span className="terms">T&C</span>
              </div>
            </div>
          </div>
          <div className="personal-accident wrap">
            <div className="icon">
              <div className="image"></div>
            </div>
            <div className="content">
              <div className="head">Personal Accident Policy<span className="movies">Avail Now</span></div>
              <div className="desc">To avail click on the button.
                <span className="terms">T&C</span>
              </div>
            </div>
          </div>
        </div>
        )
    }
  }
export default Benefits;
  