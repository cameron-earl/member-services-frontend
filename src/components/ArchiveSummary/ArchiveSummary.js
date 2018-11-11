import React, { Component } from "react";

class ArchiveSummary extends Component {
  render() {
    const { item } = this.props;
    if (item == null) return <div />;
    else {
			return <div>
					<div>image - summary - {item.title}</div>
					</div>;
	}
  }
}

export default ArchiveSummary;
