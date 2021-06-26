import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";

import "./item.css";

class Item extends Component {
  state = {};

  render() {
    return (
      <div className="item">
        <img src="https://picsum.photos/200/300" alt="item" />

        <h6>This is the title of this product</h6>
        <label>Total: $120.93</label>
        <label>Price: $12.09</label>

        <QuantityPicker></QuantityPicker>

        <button className="btn btn-sm btn-primary">Add</button>
      </div>
    );
  }
}

export default Item;
