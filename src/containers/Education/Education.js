import React from "react";
import MainView from "../MainView/MainView";
import { PageHeader } from "react-bootstrap";
import MainNavBar from "../../components/MainNavBar/MainNavBar";
import PasswordChangeModal from "../../components/PasswordChangeModal/PasswordChangeModal";
import "./Education.css";

class Education extends MainView {
  render() {
    return (
      <div className="Education">
        <MainNavBar
          page="Education"
          togglePasswordModal={this.togglePasswordModal}
        />
        <PageHeader>Tutorials and Videos</PageHeader>
        {this.state.showPasswordModal && (
          <PasswordChangeModal toggleModal={this.togglePasswordModal} />
        )}
      </div>
    );
  }
}

export default Education;
