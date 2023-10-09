import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Main from './components/Main.js';
import TravalInsurance from './components/TravelInsurance';
import Share from './components/Share';
import CurrentInsurance from './components/CurrentInsurance';
import SecureQA from './components/SecureQA';
import Dashboard from './components/Dashboard';
import CouponBoard from './components/CouponBoard';
import CoinHistory from './components/CoinsHistory';
import SecureID from './components/SecureID';
import SecureUpload from './components/SecureUpload';
import LeaderBoard from './components/LeaderBoard';
import TransactionPage1 from './components/TransactionPage1';
import TransactionPage2 from './components/TransactionPage2';
import ShareRef from './ShareRef';
import SignUP from './components/signUp';
import Whatsapp from './components/Whatsapp';
import ShareInsurance from './components/ShareInsurance';

export class App extends React.Component {

  render() {
    return (
      <Router>
      <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/TravalInsurance">
            <TravalInsurance />
          </Route>
          <Route path="/ShareAndEarn">
            <Share />
          </Route>
          <Route path="/CurrentInsurance">
            <CurrentInsurance />
          </Route>
          <Route path="/SecureQA">
            <SecureQA/>
          </Route>
          <Route path="/Dashboard">
            <Dashboard/>
          </Route>
          <Route path="/CouponBoard">
            <CouponBoard/>
          </Route>
          <Route path="/CoinHistory">
            <CoinHistory/>
          </Route>
          <Route path="/SecureID">
            <SecureID/>
          </Route>
          <Route path="/SecureUpload">
            <SecureUpload/>
          </Route>
          <Route path="/LeaderBoard">
            <LeaderBoard/>
          </Route>
          <Route path="/TransactionPage1">
            <TransactionPage1/>
          </Route>
          <Route path="/TransactionPage2">
            <TransactionPage2/>
          </Route>
          <Route path="/ShareRef">
            <ShareRef/>
          </Route>
          <Route path="/whatsapp">
            <Whatsapp/>
          </Route>
          <Route path="/signUp">
            <SignUP/>
          </Route>
          <Route path="/ShareInsurance">
            <ShareInsurance/>
          </Route>
        </Switch>
      </Router>
    )
  }
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
