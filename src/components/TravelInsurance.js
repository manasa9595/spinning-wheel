import React from "react";
import { NavLink, Link } from 'react-router-dom';

class TravalInsurance extends React.Component {
  render() {
    return (
      <>
        <div className="insurance-border">
          <Link to="/">  <button className="arrow"></button> </Link>
          <span className="text">Question Answer</span>
        </div>
        <div className="insurance">
          <div className="insurance-icon"></div>
          <div className="insurance-title">
            Do you have Accident Insurance?
            </div>
          <div className="self wrap">
            <span>For Self</span>
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
            <span> For Family</span>
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
            <span> Other Family Members</span>
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
        </div>
        <div className="next-buttona">
          <NavLink to="/ShareInsurance">
            <div className="next-button">
              Next
            </div>
          </NavLink>
        </div>
      </>
    )
  }
}
export default TravalInsurance;
