import React, { Component } from "react";
import './ArchivedItem.css';

class ArchivedItem extends Component {
  render() {
    const { item, fn } = this.props;

    return (
      <div className="archived-item" onClick={() => fn(item)}>
        <div>{item.category}</div>
        <div>{item.title}</div>
      </div>
    );
  }
}

export default ArchivedItem;
