import React from 'react';
import Wheel from './wheel';

export class Main extends React.Component {
  constructor() {
    super();
    this.morning = ['Food', 'Cab', 'Local Travelling'];
    this.afternoon = ['Lunch', 'Cab', 'Local Travelling'];
    this.evening = ['Food', 'Cab', 'Local Travelling', 'Grocery' ];
    this.others = ['Billpay', 'Movie', 'Yoga & Fitness', 'Shopping'];
    this.all = ['Food', 'Cab', 'Local Travelling', 'Grocery', 'Lunch', 'Billpay', 'Movie', 'Yoga & Fitness', 'Shopping'];
  }
  render() {
    return (
      <div className="App">
        <Wheel others= {this.others} items={this.all} morning={this.morning} afternoon={this.afternoon} evening={this.evening} />
      </div>
    );
  }
}
export default Main;
