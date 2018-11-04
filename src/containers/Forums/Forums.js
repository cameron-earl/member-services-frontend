import React from "react";
import { PageHeader } from "react-bootstrap";
import MainView from "../MainView/MainView";
import MainNavBar from "../../components/MainNavBar/MainNavBar";
import ForumTopic from "../../components/ForumTopic/ForumTopic";
import PasswordChangeModal from "../../components/PasswordChangeModal/PasswordChangeModal";
import "./Forums.css";

import { ForumData } from "../../Data";

class Forums extends MainView {
  state = {
    forums: []
  };

  componentDidMount = () => {
    this.setState({ forums: ForumData });
  };

  render() {
    return (
      <div className="Forums">
        <MainNavBar
          page="Forums"
          togglePasswordModal={this.togglePasswordModal}
        />
        <PageHeader>Forums</PageHeader>
        <div>
          {this.state.forums.map(forum => (
            <ForumTopic key={forum.id} forum={forum} />
          ))}
        </div>
        {this.state.showPasswordModal && (
          <PasswordChangeModal toggleModal={this.togglePasswordModal} />
        )}
      </div>
    );
  }
}

export default Forums;
