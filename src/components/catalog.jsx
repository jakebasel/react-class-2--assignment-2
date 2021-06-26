import React, { Component } from 'react';
import Item from "./item";
import "./catalog.css"

class Catalog extends Component {
    state = {  }
    render() { 
        return (  
            <div className="catalog-page">
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </div>
        );
    }
}
 
export default Catalog;