import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    value: 1,
  };

  render() {
    return (
      <div className="quantity-picker">
        <button onClick={this.increase} className="btb btn-sm btn-info">
          +
        </button>
        <label className="value">{this.state.value}</label>
        <button onClick={this.decrease} className="btb btn-sm btn-info">-</button>
      </div>
    );
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrease = () => {
    let val = this.state.value - 1;
    // validation
    if(val > 0){
    this.setState({ value: val });
    }
  };

}

export default QuantityPicker;
