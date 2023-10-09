import React from 'react';
import Modal from "../Modal";
import './index.css';
import FoodCoupon from '../FoodCoupon';
import Travelling from '../Travelling';
// import Features from '../Features';
import Benefits from '../Benefits';
import SecureTravelCoupon from '../SecureTravelCoupon';
import Rewards from '../Rewards';

import { NavLink } from 'react-router-dom'; 

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      percentage: '',
      isModalOpen: false,
      itemName: false,
      CouponCoins: 0,
      NoOfClicks: 0,
      level: 1,
      bannertext: 'Spin and collect Coins & win gift and more',
      transactionCoin: 7000,
      transactionCoinNew: 0
    };
    this.transactCoin=this.transactCoin.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.spinScore = this.spinScore.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.dashboard = this.dashboard.bind(this);
  }
  componentDidMount() {
    var x = document.getElementById("count");
    var level1 = 3000;
    var level2 = 6000;
    console.log("x.textContent"+x.textContent)
    setInterval(() => {
      this.setState({
        time: new Date().getHours().toLocaleString()
      })
    }, 1000)
    setInterval(() => {
      if (x.textContent >= level1) {
        this.setState({ level: 2 });
        document.getElementById("myProgress").value = 0;
      }
      if (x.textContent >= level2) {
        this.setState({ level: 3 });
        document.getElementById("myProgress").value = 0;
      }
    }, 1500)
    
    fetch('http://100.0.1.207:8080/user/findByID', {
      method: 'POST',
      body: 1
    })
    .then(res => res.json())
    .then(data => 
      // console.log(data.dashBoardDto.transactionCoin)
      this.setState({
        coins: data.dashBoardDto.spinCoin + data.dashBoardDto.transactionCoin
      })
    )
    this.setState({ percentage: Math.floor((x.textContent / level1) * 100) })
  }
    
  buttonClicked() {
    this.setState({ 
      NoOfClicks: this.state.NoOfClicks + 1, 
      bannertext: "Pay your bills and get exciting gift and 100% Coins"
    });
    console.log("this.state.NoOfClicks : " + this.state.NoOfClicks);
    setTimeout(this.selectItem, 500);
    document.getElementById('spin').disabled = true;

    fetch('http://100.0.1.207:8080/user/findByID', {
      method: 'POST',
      body: 1
    })
  }
  selectItem() {
    const morning = this.state.time >= 5 && this.state.time <= 11;
    const afternoon = this.state.time >= 12 && this.state.time <= 15;
    const evening = this.state.time >= 16 && this.state.time <= 22;
    console.log("+++ this.state.NoOfClicks : " + this.state.NoOfClicks);
    if (this.state.selectedItem === null) {
      var selectedItem;
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      if (morning) {
        if (this.state.NoOfClicks === 1) {
          console.log('good morning')
          selectedItem = 0;
          this.setState({ selectedItem });
        } else if (this.state.NoOfClicks === 2) {
          console.log('good morning')
          selectedItem = 1;
          this.setState({ selectedItem });
        } else if (this.state.NoOfClicks === 3) {
          console.log('good morning')
          selectedItem = 2;
          this.setState({ selectedItem });
        } else {
          selectedItem = Math.floor((Math.random() * this.props.others.length) + 5);
          console.log("Random Selection: " + selectedItem)
          this.setState({ selectedItem });
        }
      } else if (afternoon) {
        if (this.state.NoOfClicks === 1) {
          console.log('good afternoon')
          selectedItem = 4;
          this.setState({ selectedItem });
        } else if (this.state.NoOfClicks === 2) {
          console.log('good afternoon')
          selectedItem = 1;
          this.setState({ selectedItem });
        } else if (this.state.NoOfClicks === 3) {
          console.log('good afternoon')
          selectedItem = 3;
          this.setState({ selectedItem });
        } else {
          selectedItem = Math.floor((Math.random() * this.props.others.length) + 5);
          console.log("Random Selection: " + selectedItem)
          this.setState({ selectedItem });
        }
      } else if (evening) {
        if (this.state.NoOfClicks === 1) {
          console.log('good evening')
          selectedItem = 0;
          this.setState({ selectedItem });
        } else if (this.state.NoOfClicks === 2) {
          console.log('good evening')
          selectedItem = 1;
          this.setState({ selectedItem });
        } else if (this.state.NoOfClicks === 3) {
          console.log('good evening')
          selectedItem = 2;
          this.setState({ selectedItem });
        } else if (this.state.NoOfClicks === 4) {
          console.log('good evening')
          selectedItem = 3;
          this.setState({ selectedItem });
        } else {
          selectedItem = Math.floor((Math.random() * this.props.others.length) + 5);
          console.log("Random Selection: " + selectedItem)
          this.setState({ selectedItem });
        }
      }
      else {
        selectedItem = Math.floor((Math.random() * this.props.others.length) + 5);
        console.log("Random Selection: " + selectedItem)
        this.setState({ selectedItem });
      }
      setTimeout(function () {
        this.setState({ itemName: true });
        document.getElementById('spin').disabled = false;
      }.bind(this), 4500)
      setTimeout(this.spinScore, 5000);
      fetch('http://100.0.1.207:8080/dashboard/findByID', {
        method: 'POST',
        body: 1
      })
    }
    else {
      this.setState({ itemName: false })
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }
  toggleModal() {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  }
  spinScore() {
    var x = document.getElementById("count");
    // var level1 = 3000;
    console.log("this.state.coins"+this.state.coins)
    if (x.textContent === '0') {
      x.innerHTML = parseInt(200);
      this.setState({ CouponCoins: x.innerHTML })
      document.getElementById("myProgress").value = 200;
      this.toggleModal();
      console.log("x.textContent " + this.state.coins)
    }
    else {
      console.log("this.state.CouponCoins " + this.state.CouponCoins)
      var couponPercentage = Math.floor((10 / 100) * this.state.CouponCoins)
      this.setState({ CouponCoins:(this.state.CouponCoins) - couponPercentage });
      x.innerHTML = parseInt(x.innerHTML) + parseInt(this.state.CouponCoins);
      document.getElementById("myProgress").value = this.state.coins;
      this.toggleModal();
      console.log("x.textContent " + this.state.coins);
    }
    // this.setState({ percentage: Math.floor((this.state.coins / level1) * 100) })
    // console.log("percentage"+this.state.percentage)
    this.dashboard();
    fetch('http://100.0.1.207:8080/dashboard/findByID', {
      method: 'POST',
      body: 1
    })
    .then(data => console.log(data.spinCoin))
  }
  transactCoin(){
    this.setState({transactionCoinNew : Math.floor((50 / 100) * this.state.transactionCoin)})
  }
  dashboard(){
    fetch('http://100.0.1.207:8080/dashboard/saveOrUpdate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id":1,
                "name":"Manasa's DashBoard",
                "sharingCoin":0,
                "spinCoin":this.state.CouponCoins,
                "transactionCoin":this.state.transactionCoinNew,
                "questionCoin":0,
                "userID":1
            })
      })
  } 
  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;
    const itemVisible = { display: this.state.itemName ? 'block' : 'none' };

    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';
    const Congrats = {
      color: "#0bb10b",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "22px"
    }
    const Points = {
      color: "#FFC107",
      textAlign: "center",
      fontSize: "17px"
    }
    return (
      <>
      <div className="main-border"></div>
      
      <div className="rewards-count">
        <div className="coins-wrap">
        <NavLink to="/CoinHistory">
          <span className="coins"></span>
          <span className="coins-content">Coins:<span id="count">{this.state.coins}</span></span>
        </NavLink>
        </div>
      <Rewards/>
      </div>
        <div className="wheel-container">
          <span className="item" style={itemVisible}>{this.props.items[selectedItem]}</span>
          <div className={`wheel ${spinning}`} style={wheelVars}>
            {items.map((item, index) => (
              <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                <span className={`spin-image spin-image-${index}`}></span>
              </div>
            ))}
          </div>
          <input type="button" id="spin" className="spin" value="SPIN" onClick={this.buttonClicked}></input>
          <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal}>
            <div className ={`congratulations ${this.props.items[selectedItem]}`}>
            </div>
            <div style={Congrats} >
              Congratulations
            </div>
            <div style={Points} >
              You got {this.state.CouponCoins} coins
            </div>
            {(this.props.items[selectedItem] === 'Food' || this.props.items[selectedItem] === 'Lunch') &&
              <FoodCoupon></FoodCoupon>}
            { this.props.items[selectedItem] === 'Cab' &&
              <Travelling></Travelling>}
            {(this.props.items[selectedItem] === 'Local Travelling') &&
              <SecureTravelCoupon></SecureTravelCoupon>}
          </Modal>
          <div className="progressPercent" style={{ top: this.state.percentage + "%" }}> {this.state.percentage + "%"} </div>
          <div className="level">Level {this.state.level}</div>
          <div className="progress">
            <progress id="myProgress" value={this.state.coins} max="3000">
            </progress>
          </div>
        </div>
        <div className="content-main row">
          <div className="banner">{this.state.bannertext}
            
        </div>
          <div className="banner-description">
            <span className="heading"><b>Spin</b> and get coupons, <b>Ad Movie/Dinner</b> with <b>Sachin</b> or upto <b>1 Lakh</b>
            rupees coupon, Complimentary product and many more
              <span className="terms">T&C</span>
            </span>
          </div>
        </div>
        <div className="features row">
          <div className="add-money head">
            <div className="icon">
              <div className="image"></div>
            </div>
            <div className="content">Add Money</div>
          </div>
          <div className="pay-bills head">
            <div className="icon">
              <div className="image"></div>
            </div>
            <div className="content">Pay Bills</div>
          </div>
          <div className="scan-pay head">
            <div className="icon">
              <div className="image"></div>
            </div>
            <div className="content">Scan & Pay</div>
          </div>
          <div className="transfer head" onClick={this.transactCoin}>
          <NavLink to="/TransactionPage1">
            <div className="icon">
              <div className="image"></div>
            </div>
            <div className="content">Transfer</div>
          </NavLink>
          </div>
          <div className="share-earn head"> 
          <NavLink to="/ShareAndEarn">
            <div className="icon">
              <div className="image"></div>
            </div>
            <div className="content">Share & Earn</div>
            </NavLink>
          </div>
        </div>
        <div className="leaderboard-wrap">
          <NavLink to="/Leaderboard">
            <div className="leaderboard"></div>
          </NavLink>
        </div>
        {/* <div className="bar"></div> */}
        <Benefits></Benefits>
        <div className="bar"></div>
        <div className="account-details">
          <div className="savings-head">Savings Account<span className="arrow">></span></div>
          <div className="digiSavings">digiSavings</div>
          <div className="upi-id">**** **** 9922/UPI:gamify@dbs</div>
          <div className="balace-head">Balance</div>
          <div className="balance-amount">5,423.10</div>
          <div className="UPI-accounts">UPI Linked Accounts<span className="arrow">></span></div>
          <div className="savings-head fixed-deposits">Fixed Deposits</div>
        </div>
      </>
    );
  }
}
