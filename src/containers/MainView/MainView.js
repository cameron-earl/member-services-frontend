import { Component } from "react";

class MainView extends Component {
  state = {
    showPasswordModal: false
  };

  togglePasswordModal = () => {
    this.setState({
      ...this.state,
      showPasswordModal: !this.state.showPasswordModal
    });
  };
}

export default MainView;
