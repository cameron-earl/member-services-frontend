import React, { Component } from "react";

class ArchiveSummary extends Component {
  render() {
    const { item } = this.props;
    if (item == null) return <div />;
    else return <div>summary - {item.title}</div>;
  }
}

export default ArchiveSummary;
