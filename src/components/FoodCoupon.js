import React from "react";

class Coupon extends React.Component {
  render() {
    return (
        <>
            <div className="discount-title">
                20% discount on Udipi restaurant
            </div>
            <div className="discount-desc">
                Scan and Pay to earn more coins. Share the app with friends and earn coins.
                Get opportunity to participate in Ad Movie or have dinner with Sachin or coupon worth
                upto 1 Lakh rupees and many more <span className="terms">T&C</span>
            </div>
            <div className="discount-icon">
            </div>
            <span className="discount-icon-text">Scan & Pay</span>
        </>
    )
  }
}
export default Coupon;
