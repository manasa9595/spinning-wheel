import React from "react";
import { NavLink, Link } from 'react-router-dom';

class SecureQA extends React.Component {
  render() {
    return (
      <>
        <div className="insurance-border">
          <Link to="/">  <button className="arrow"></button> </Link>
          <span className="text">Question Answer</span>
        </div>
        <div className="secure">
          <div className="secure-icon"></div>
          <div className="insurance-title">
            Are you daily traveller?
            </div>
          <div className="self wrap">
            <span>Self Drive Bike</span>
            <label>
              <input name="self" type="radio" value="No"/>
              <span className="checkmark"></span>
              No
            </label>
            <label>
                <input name="self" type="radio" value="Yes" />
                <span className="checkmark"></span>
                Yes
            </label>
          </div>
          <div className="family wrap">
            <span>Self Drive Car</span>
            <label>
              <input name="family" type="radio" value="No" />
              <span className="checkmark"></span>
              No
            </label>
            <label>
              <input name="family" type="radio" value="Yes" />
              <span className="checkmark"></span>
              Yes
            </label>
          </div>
          <div className="other-family wrap">
            <span>Travel by hire Cab/Bike</span>
            <label>
              <input name="other" type="radio" value="No" />
              <span className="checkmark"></span>
              No
            </label>
            <label>
              <input name="other" type="radio" value="Yes" />
              <span className="checkmark"></span>
              Yes
            </label>
          </div>
          <div className="other-friends wrap">
            <span>With Friends</span>
            <label>
              <input name="friends" type="radio" value="No" />
              <span className="checkmark"></span>
              No
            </label>
            <label>
              <input name="friends" type="radio" value="Yes" />
              <span className="checkmark"></span>
              Yes
            </label>
          </div>
        </div>
        <div className="secure-next-buttona">
          <NavLink to="/Share">
            <div className="share-button next-button">
              Share with friends
            </div>
          </NavLink>
          <NavLink to="/SecureID">
            <div className="next-button">
              Next
            </div>
          </NavLink>
        </div>
      </>
    )
  }
}
export default SecureQA;
